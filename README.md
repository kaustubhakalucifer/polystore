# Cloud Storage Middleware

**Cloud Storage Middleware** is a TypeScript library that provides a unified interface for interacting with different cloud storage providers (AWS S3, Google Cloud Storage, and Azure Blob Storage). This package allows developers to easily perform common file operations—such as uploading, deleting, and listing files—using a consistent API, regardless of the underlying cloud provider.

## Features

- **Unified Interface**: A common interface (`CloudStorageProvider`) for all cloud providers, ensuring consistent usage across different platforms.
- **Provider-Specific Implementations**: Separate classes for each provider (`AwsMiddleware`, `GcpMiddleware`, `AzureMiddleware`), allowing you to configure and use only the provider you need.
- **TypeScript Support**: Fully written in TypeScript for type safety and better developer experience.
- **Modular Design**: Easily extendable to support additional cloud storage providers in the future.

## Supported Providers

- **AWS S3**: Leverage the power of Amazon's Simple Storage Service.
- **Google Cloud Storage**: Integrate with Google's scalable object storage service.
- **Azure Blob Storage**: Use Azure's massively scalable object storage for any type of unstructured data.

## Installation

To install the package, use npm:

```shell
npm install cloud-storage-middleware
```

## Usage
```typescript
import { AwsMiddleware, GcpMiddleware, AzureMiddleware } from 'cloud-storage-middleware';

// Example usage for AWS
const awsProvider = new AwsMiddleware({ region: 'us-west-2' });
await awsProvider.upload('my-bucket', 'file.txt', Buffer.from('Hello AWS!'));
await awsProvider.listFiles('my-bucket');

// Example usage for GCP
const gcpProvider = new GcpMiddleware({ projectId: 'my-project-id' });
await gcpProvider.upload('my-bucket', 'file.txt', Buffer.from('Hello GCP!'));
await gcpProvider.listFiles('my-bucket');

// Example usage for Azure
const azureProvider = new AzureMiddleware('my-azure-connection-string');
await azureProvider.upload('my-container', 'file.txt', Buffer.from('Hello Azure!'));
await azureProvider.listFiles('my-container');
```

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. **Fork the repository**: Click the "Fork" button at the top right of this page
2. **Create a branch:**
```shell
   git checkout -b feature/your-feature
```
3. **Make your changes:** Implement your feature or fix.
4. **Commit your changes:**
```shell
git commit -am 'Add new feature'
```
5. **Push to the branch:**
```shell
git push origin feature/your-feature
```
6. **Open a pull request:** Go to your fork on GitHub, select the "Pull Request" tab, and click "New Pull Request"

## License
This project is licensed under the MIT License - see the LICENSE file for details.