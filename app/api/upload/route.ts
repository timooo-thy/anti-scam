import { BlobServiceClient } from "@azure/storage-blob";
import { NextResponse } from "next/server";

interface BodyParams {
  image: string;
  folderName: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image, folderName } = body as BodyParams;

    const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME as string;
    const connectionString = process.env
      .AZURE_STORAGE_CONNECTION_STRING as string;

    const blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const filename = `${folderName}/${Date.now()}.png`;
    const imageBuffer = Buffer.from(image, "base64");
    const blockBlobClient = containerClient.getBlockBlobClient(filename);

    await blockBlobClient.uploadData(imageBuffer, {
      blobHTTPHeaders: { blobContentType: "image/png" },
    });

    return NextResponse.json(
      { message: "Image uploaded successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error uploading image." },
      { status: 500 }
    );
  }
}
