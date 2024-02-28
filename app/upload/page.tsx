import { Metadata } from "next";
import Upload from "./Upload";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Upload | SG Anti-Scam AI",
  description: "Upload your conversations with just a click of a button.",
};
const UploadPage: FC = () => {
  return (
    <div>
      <Upload />
    </div>
  );
};

export default UploadPage;
