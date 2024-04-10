import { DashboardTable } from "./DashboardTable";
import { FC } from "react";
import prisma from "@/lib/db";

interface DashboardProps {
  email: string;
  role: "admin" | undefined;
}

const Dashboard: FC<DashboardProps> = async () => {
  const files = await prisma.scamSubmission.findMany({
    include: {
      conversation: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="my-[50px] flex h-full w-10/12 justify-center md:my-[75px] md:w-8/12 xl:w-6/12">
      <DashboardTable files={files} />
    </div>
  );
};

export default Dashboard;
