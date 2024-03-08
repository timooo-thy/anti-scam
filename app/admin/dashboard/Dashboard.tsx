"use client";
import React, { FC, useEffect, useCallback, useState } from "react";
import { JsonFile, JsonContent, FullJsonFile } from "@/types/FullJsonFile";
import { Spinner } from "@nextui-org/react";
import { DashboardTable } from "./DashboardTable";
import { useFiles } from "@/filesContext";

interface DashboardProps {
  email: string;
  role: "admin" | undefined;
}

const Dashboard: FC<DashboardProps> = ({ email, role }: DashboardProps) => {
  const { files, setFiles } = useFiles();
  const [isLoading, setIsLoading] = useState(false);

  const fetchJsonFiles = useCallback(async () => {
    setIsLoading(true);
    if (role == "admin") {
      try {
        const response = await fetch("/api/admin-data", { cache: "no-store" });
        const files: JsonFile[] = await response.json();

        if (response.ok) {
          const filesWithContentPromises = files.map(async (file) => {
            const contentResponse = await fetch(file.url);
            const content: JsonContent = await contentResponse.json();
            return { ...file, content };
          });

          const filesWithContent = await Promise.all(filesWithContentPromises);
          setFiles(filesWithContent);
        } else {
          console.log("Error fetching json files");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch("/api/admin-data", { cache: "no-store" });
        const files: JsonFile[] = await response.json();

        if (response.ok) {
          const filesWithContentPromises = files.map(async (file) => {
            const contentResponse = await fetch(file.url);
            const content: JsonContent = await contentResponse.json();
            if (content.email === email) {
              return { ...file, content };
            }
          });

          const filesWithContent = (
            await Promise.all(filesWithContentPromises)
          ).filter((file) => file !== undefined) as FullJsonFile[];

          setFiles(filesWithContent);
        } else {
          console.log("Error fetching json files");
        }
      } catch (error) {
        console.log(error);
      }
    }
    setIsLoading(false);
  }, [setFiles, role, email]);

  useEffect(() => {
    fetchJsonFiles();
  }, [fetchJsonFiles]);

  return (
    <div className="my-[50px] flex h-full w-10/12 justify-center md:my-[75px] md:w-8/12 xl:w-6/12">
      {!isLoading ? (
        <DashboardTable />
      ) : (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
