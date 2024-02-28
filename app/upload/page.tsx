"use client";
import React, { FC, useState, ChangeEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { SelectedImageType } from "@/types/SelectedImageType";

const Upload: FC = () => {
  const [selectedImages, setSelectedImages] = useState<SelectedImageType>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async () => {
    if (selectedImages.length === 0) {
      toast.error("No images selected.");
      return;
    }

    const folderName = uuidv4();

    const uploadPromises = selectedImages.map((selectedImage) => {
      return new Promise<void>(async (resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(selectedImage);
        reader.onloadend = async () => {
          const base64Image = reader.result?.toString().split(",")[1];
          if (base64Image) {
            try {
              const response = await fetch("/api/upload", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ image: base64Image, folderName }),
              });

              if (!response.ok) {
                toast.error("Network response was not successful.");
              }
              resolve();
            } catch (error) {
              toast.error("Error uploading image(s).");
              reject(error);
            }
          }
        };
        reader.onerror = (error) => {
          toast.error("Error converting image(s).");
          reject(error);
        };
      });
    });

    try {
      await Promise.all(uploadPromises);
      toast.success("Image(s) uploaded successfully.");
      setSelectedImages([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      toast.error("Error uploading one or more images.");
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedImages(filesArray);
    }
  };
  return (
    <main className="flex min-h-[calc(100dvh-168px)] flex-col items-center bg-background">
      <div className="flex flex-col gap-10 w-8/12 my-[120px]">
        <h1 className="text-4xl">Upload your conversations</h1>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <Button onClick={handleImageUpload} className="text-white w-1/3">
          Upload Images
        </Button>
      </div>
    </main>
  );
};

export default Upload;
