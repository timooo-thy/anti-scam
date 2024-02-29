import React, { FC } from "react";
import { auth } from "@clerk/nextjs";
interface DashboardProps {}
import { notFound } from "next/navigation";

const Dashboard: FC<DashboardProps> = ({}) => {
  const { sessionClaims } = auth();

  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.metadata.role !== "admin") {
    notFound();
  }

  return (
    <main className="flex min-h-[calc(100dvh-168px)] flex-col items-center bg-background ">
      <div className="my-[75px] md:my-[120px]">
        <h1>This is the admin dashboard</h1>
        <p>This page is restricted to users with the &apos;admin&apos; role.</p>
      </div>
    </main>
  );
};

export default Dashboard;
