import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Sample data for ScamSubmission #1
  await prisma.scamSubmission.create({
    data: {
      email: "user1@example.com",
      flagged: false,
      aiScore: 0.8,
      conversation: {
        create: [
          {
            from: "user1@example.com",
            message: "I received a suspicious email claiming I won a lottery.",
            timestamp: new Date("2024-04-01T10:00:00"),
          },
          {
            from: "support@example.com",
            message: "Thank you for reporting. We are looking into it.",
            timestamp: new Date("2024-04-01T10:15:00"),
          },
        ],
      },
    },
  });

  // Sample data for ScamSubmission #2
  await prisma.scamSubmission.create({
    data: {
      email: "user2@example.com",
      flagged: true,
      aiScore: 0.95,
      conversation: {
        create: [
          {
            from: "user2@example.com",
            message: "This website asked for my bank details suspiciously.",
            timestamp: new Date("2024-04-02T11:20:00"),
          },
          {
            from: "support@example.com",
            message:
              "Report received. We advise not to share personal details.",
            timestamp: new Date("2024-04-02T11:40:00"),
          },
        ],
      },
    },
  });

  // Sample data for ScamSubmission #3
  await prisma.scamSubmission.create({
    data: {
      email: "user3@example.com",
      flagged: false,
      aiScore: 0.6,
      conversation: {
        create: [
          {
            from: "user3@example.com",
            message: "Is this investment opportunity legit?",
            timestamp: new Date("2024-04-03T09:30:00"),
          },
          {
            from: "support@example.com",
            message: "It looks suspicious. Avoid engaging.",
            timestamp: new Date("2024-04-03T09:45:00"),
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
