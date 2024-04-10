import { Suspense } from "react";
import { auth } from "@clerk/nextjs";
import Dashboard from "../../../components/Dashboard";
import { Metadata } from "next";
import Loading from "@/app/loading";

export const metadata: Metadata = {
  title: "Admin Dashboard | SG Anti-Scam AI",
  description: "Manage all submissions within a dashboard.",
};

export default async function DashboardPage() {
  const { sessionClaims } = auth();

  const email = sessionClaims?.email as string;

  return (
    <main className="flex min-h-[calc(100dvh-168px)] flex-col items-center bg-background">
      <h1 className="mt-[50px] text-2xl md:mt-[100px] md:text-4xl">
        {sessionClaims?.metadata.role !== "admin"
          ? "User Dashboard"
          : "Admin Dashboard"}
      </h1>
      <Suspense fallback={<Loading />}>
        <Dashboard email={email} role={sessionClaims?.metadata.role} />
      </Suspense>
    </main>
  );
}
