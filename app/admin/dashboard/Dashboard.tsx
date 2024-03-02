"use client";
import React, { FC, useEffect, useCallback } from "react";
import { JsonFile, JsonContent } from "@/types/FullJsonFile";
import { Spinner } from "@nextui-org/react";
import { DashboardTable } from "./DashboardTable";
import { useFiles } from "@/filesContext";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  const { files, setFiles } = useFiles();

  const fetchJsonFiles = useCallback(async () => {
    try {
      const response = await fetch("/api/admin-data");
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
  }, [setFiles]);

  useEffect(() => {
    fetchJsonFiles();
  }, [fetchJsonFiles]);

  return (
    <div className="my-[50px] flex w-10/12 justify-center md:my-[120px] md:w-8/12 xl:w-6/12">
      {files.length > 0 ? (
        <DashboardTable />
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center gap-5 text-base md:text-lg">
          Updating files...
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
