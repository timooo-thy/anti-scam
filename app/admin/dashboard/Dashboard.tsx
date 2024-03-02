"use client";
import React, { FC, useState, useEffect } from "react";
import { FullJsonFile, JsonFile, JsonContent } from "@/types/FullJsonFile";
import { Spinner } from "@nextui-org/react";
import { DashboardTable } from "./DashboardTable";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  const [jsonFiles, setJsonFiles] = useState<FullJsonFile[]>([]);

  const fetchJsonFiles = async () => {
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
        setJsonFiles(filesWithContent);
      } else {
        console.log("Error fetching json files");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJsonFiles();
  }, []);

  return (
    <div className="my-[50px] flex w-10/12 justify-center md:my-[120px] md:w-8/12 xl:w-6/12">
      {jsonFiles.length > 0 ? (
        <DashboardTable files={jsonFiles} />
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
