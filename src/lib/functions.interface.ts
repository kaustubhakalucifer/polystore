export interface CloudStorageProvider {
  upload(containerName: string, filePath: string, body: Buffer): Promise<void>;
  listFiles(containerName: string): Promise<string[]>;
}
