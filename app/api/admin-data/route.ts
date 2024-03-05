import { BlobServiceClient } from "@azure/storage-blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const containerName = process.env
      .AZURE_STORAGE_ADMIN_CONTAINER_NAME as string;
    const connectionString = process.env
      .AZURE_STORAGE_CONNECTION_STRING as string;

    const blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const blobs: Array<{ name: string; url: string }> = [];
    for await (const blob of containerClient.listBlobsFlat()) {
      const url = `https://${blobServiceClient.accountName}.blob.core.windows.net/${containerName}/${blob.name}`;
      blobs.push({ name: blob.name, url: url });
    }

    return NextResponse.json(blobs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error retrieving blobs." },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
