import React, { FC } from "react";
import { auth } from "@clerk/nextjs";
import { notFound } from "next/navigation";
import Dashboard from "./Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload | SG Anti-Scam AI",
  description: "Upload your conversations with just a click of a button.",
};

const DashboardPage: FC = ({}) => {
  const { sessionClaims } = auth();

  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.metadata.role !== "admin") {
    notFound();
  }

  return (
    <main className="flex h-[calc(100dvh-168px)] flex-col items-center bg-background">
      <h1 className="mt-[50px] text-2xl md:mt-[100px] md:text-4xl">
        Admin dashboard
      </h1>
      <Dashboard />
    </main>
  );
};

export default DashboardPage;
