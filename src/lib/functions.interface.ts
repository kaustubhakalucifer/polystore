export interface CloudStorageProvider {
  listFiles(containerName: string): Promise<string[]>;
}
