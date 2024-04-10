import { Metadata } from "next";
import Upload from "../../components/Upload";

export const metadata: Metadata = {
  title: "Upload | SG Anti-Scam AI",
  description: "Upload your conversations with just a click of a button.",
};

export default function UploadPage() {
  return (
    <div className="flex min-h-[calc(100dvh-168px)] flex-col items-center bg-background">
      <Upload />
      <div className="mt-5 flex flex-col items-center justify-center">
        <p className=" w-9/12 italic text-gray-500 md:w-8/12 xl:w-6/12 ">
          By uploading your conversations, you help us make SG Anti-Scam AI
          smarter and more effective in protecting you and others from scams.
          Please be aware that, in the initial phases of our platform&apos;s
          development, our administrators may review uploaded conversations to
          refine our AI&apos;s detection capabilities. Thank you for
          contributing to a scam-free community.
        </p>
      </div>
    </div>
  );
}
