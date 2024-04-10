import { Prisma } from "@prisma/client";

export type FullScamSubmission = Prisma.ScamSubmissionGetPayload<{
  include: {
    conversation: true;
  };
}>;
