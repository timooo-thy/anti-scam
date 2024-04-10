"use client";
import { useState, ChangeEvent, useRef } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { UploadCarousel } from "./upload-carousel";
import { Label } from "./ui/label";
import { uploadImages } from "@/actions/actions";
import UploadImageButton from "./upload-image-button";

export default function UploadForm() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [email, setEmail] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedImages(filesArray);
    }
  };

  const handleUpload = async (formData: FormData) => {
    if (!email) {
      toast.error("Please enter an email.");
      return;
    }
    if (selectedImages.length === 0) {
      toast.error("No files selected.");
      return;
    }
    const error = await uploadImages(
      formData,
      selectedImages.map((image) => image.type),
      selectedImages.map((image) => image.size),
    );
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Images uploaded successfully");
      setSelectedImages([]);
      setEmail("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="my-[75px] flex w-9/12 flex-col gap-10 md:my-[120px] md:w-8/12 xl:w-6/12">
      <h1 className="text-2xl md:text-4xl">Upload your conversations</h1>
      <form className="flex flex-col gap-5" action={handleUpload}>
        <Label htmlFor="email" className="text-base">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="md:w-1/3"
        />
        <Input
          ref={fileInputRef}
          name="files"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full bg-background file:text-base md:w-1/3"
        />
        <div className="flex w-full justify-center md:w-1/3">
          {selectedImages.length > 0 && (
            <UploadCarousel images={selectedImages} />
          )}
        </div>
        <UploadImageButton />
      </form>
    </div>
  );
}
