import { Suspense } from "react";
import { auth } from "@clerk/nextjs";
import Dashboard from "../../../components/Dashboard";
import Loading from "@/src/app/loading";

export async function generateMetadata() {
  const { sessionClaims } = auth();
  return {
    title: `${
      sessionClaims?.metadata.role === "admin"
        ? "Admin Dashboard | SG Anti-Scam AI"
        : "User Dashboard | SG Anti-Scam AI"
    }`,
    description: "Manage all your submissions within a dedicated dashboard.",
  };
}
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
