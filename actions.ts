"use server";

import { BlobServiceClient } from "@azure/storage-blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function toggleFlag(blobName: string) {
  if (!blobName) return;
  const containerName = process.env
    .AZURE_STORAGE_ADMIN_CONTAINER_NAME as string;
  const connectionString = process.env
    .AZURE_STORAGE_CONNECTION_STRING as string;

  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlockBlobClient(blobName);

  try {
    // Download the blob's content
    const downloadResponse = await blobClient.download(0);
    const downloadedContent: string = await streamToString(
      downloadResponse.readableStreamBody as NodeJS.ReadableStream,
    );

    // Parse, modify, and prepare the content for upload
    const contentObject = JSON.parse(downloadedContent);
    contentObject.flagged = !contentObject.flagged; // Toggle the flag
    const updatedContent = JSON.stringify(contentObject);

    // Upload the updated content
    await blobClient.upload(updatedContent, Buffer.byteLength(updatedContent), {
      blobHTTPHeaders: { blobContentType: "application/json" },
    });
    revalidatePath("/admin/dashboard");
  } catch (error) {
    console.error("Error toggling flag in blob:", (error as any).message);
  }
}

async function streamToString(
  readableStream: NodeJS.ReadableStream,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    readableStream.on("data", (chunk) => chunks.push(chunk));
    readableStream.on("end", () =>
      resolve(Buffer.concat(chunks).toString("utf8")),
    );
    readableStream.on("error", reject);
  });
}
