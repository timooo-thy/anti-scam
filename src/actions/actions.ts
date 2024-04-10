"use server";

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const acceptedImageTypes = "image/";

const maxFileSize = 10 * 1024 * 1024; // 10MB

export async function toggleFlag(id: string) {
  const scamSubmission = await prisma.scamSubmission.findUnique({
    where: { id },
    select: { flagged: true },
  });

  if (!scamSubmission) {
    throw new Error("Scam submission not found");
  }

  await prisma.scamSubmission.update({
    where: {
      id,
    },
    data: {
      flagged: !scamSubmission.flagged,
    },
  });

  revalidatePath("/admin/dashboard");
}

export async function uploadImages(
  formData: FormData,
  type: string[],
  size: number[],
) {
  const files = formData.getAll("files") as File[];
  const folderName = formData.get("email") as string;

  if (size.some((fileSize) => fileSize > maxFileSize)) {
    return {
      message: "Combined file sizes are too large.",
    };
  }

  if (type.some((fileType) => !fileType.includes(acceptedImageTypes))) {
    return {
      message: "One or more files are not supported.",
    };
  }

  try {
    const uuid = uuidv4();
    let i = 0;
    for (const file of files) {
      const fileKey = `${folderName}-${uuid}/${file.name}`;

      const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileKey,
        Body: file,
        ContentType: type[i++],
        ContentLength: size[i++],
        Metadata: {
          email: folderName,
          processed: "false",
        },
      });

      const signedURL = await getSignedUrl(s3Client, putObjectCommand, {
        expiresIn: 60, // URL expires in 60 seconds
      });

      await fetch(signedURL, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });
    }
  } catch (e) {
    return {
      message: "Error uploading images.",
    };
  }
}
