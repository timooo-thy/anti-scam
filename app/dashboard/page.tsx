import React, { FC } from "react";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <main className="flex min-h-[calc(100dvh-168px)] flex-col items-center bg-background">
      <div>Dashboard</div>
    </main>
  );
};

export default Dashboard;
