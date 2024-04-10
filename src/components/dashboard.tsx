import { DashboardTable } from "./dashboard-table";
import { FC } from "react";
import prisma from "@/lib/db";
import { FullScamSubmission } from "@/types/types";

interface DashboardProps {
  email: string;
  role: "admin" | undefined;
}

const Dashboard: FC<DashboardProps> = async ({
  email,
  role,
}: DashboardProps) => {
  let files: FullScamSubmission[] = [];

  if (role === "admin") {
    files = await prisma.scamSubmission.findMany({
      include: {
        conversation: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    files = await prisma.scamSubmission.findMany({
      include: {
        conversation: true,
      },
      where: {
        email: email,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return (
    <div className="my-[50px] flex h-full w-10/12 justify-center md:my-[75px] md:w-8/12 xl:w-6/12">
      <DashboardTable files={files} />
    </div>
  );
};

export default Dashboard;
