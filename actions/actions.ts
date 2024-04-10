"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

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
