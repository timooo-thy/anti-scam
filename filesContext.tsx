"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { FullJsonFile } from "./types/FullJsonFile";

type FilesContextType = {
  files: FullJsonFile[];
  setFiles: React.Dispatch<React.SetStateAction<FullJsonFile[]>>;
  toggleFileFlag: (fileName: string) => void;
};

const defaultState: FilesContextType = {
  files: [],
  setFiles: () => {},
  toggleFileFlag: () => {},
};

const FilesContext = createContext<FilesContextType>(defaultState);

interface FilesProviderProps {
  children: ReactNode;
}

export const FilesProvider: React.FC<FilesProviderProps> = ({ children }) => {
  const [files, setFiles] = useState<FullJsonFile[]>([]);

  const toggleFileFlag = (fileName: string) => {
    const updatedFiles = files.map((file) => {
      if (file.content?.fileName === fileName) {
        console.log("Flag toggled for:", fileName);
        return {
          ...file,
          content: {
            ...file.content,
            flagged: !file.content.flagged,
          },
        };
      }
      return file;
    });
    setFiles(updatedFiles);
  };

  return (
    <FilesContext.Provider value={{ files, setFiles, toggleFileFlag }}>
      {children}
    </FilesContext.Provider>
  );
};

export const useFiles = () => useContext(FilesContext);
