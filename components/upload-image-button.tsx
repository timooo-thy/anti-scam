import { Spinner } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function UploadImageButton() {
  const { pending } = useFormStatus();
  return (
    <div className="flex gap-5">
      <Button className="text-base text-white md:w-1/3" disabled={pending}>
        Upload Images
      </Button>
      {pending && <Spinner />}
    </div>
  );
}
