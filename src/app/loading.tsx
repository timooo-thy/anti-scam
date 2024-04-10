import React from "react";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="my-[100px] flex h-auto items-center justify-center">
      <Spinner />
    </div>
  );
}
