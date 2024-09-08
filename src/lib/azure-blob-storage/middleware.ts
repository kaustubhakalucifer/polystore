import { CloudStorageProvider } from '../functions.interface';
import { BlobServiceClient } from '@azure/storage-blob';

export class AzureMiddleware implements CloudStorageProvider {
  private blobServiceClient: BlobServiceClient;

  constructor(connectionString: string) {
    this.blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);
  }

  async upload(
    containerName: string,
    blobName: string,
    body: Buffer
  ): Promise<void> {
    const containerClient =
      this.blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.upload(body, body.length);
  }
}
