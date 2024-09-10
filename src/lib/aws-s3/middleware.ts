import { CloudStorageProvider } from '../functions.interface';
import { ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3';

export class AwsMiddleware implements CloudStorageProvider {
  private s3ClientService: S3Client;

  constructor(configuration: {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
  }) {
    this.s3ClientService = new S3Client({
      credentials: {
        accessKeyId: configuration.accessKeyId,
        secretAccessKey: configuration.secretAccessKey,
      },
      region: configuration.region,
    });
  }

  async listFiles(containerName: string): Promise<string[]> {
    const command = new ListObjectsV2Command({ Bucket: containerName });
    const response = await this.s3ClientService.send(command);
    const blobs: string[] = [];
    for (const i of response.Contents) {
      blobs.push(i.Key);
    }
    return blobs;
  }
}
