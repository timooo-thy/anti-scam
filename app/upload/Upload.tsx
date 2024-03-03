"use client";
import React, { FC, useState, ChangeEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { SelectedImageType } from "@/types/SelectedImageType";
import { Input } from "@/components/ui/input";
import { Spinner } from "@nextui-org/react";
import { UploadCarousel } from "./UploadCarousel";

const Upload: FC = () => {
  const [selectedImages, setSelectedImages] = useState<SelectedImageType>([]);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async () => {
    if (loading) {
      toast.error("Please wait for the current upload to finish.");
      return;
    }

    if (selectedImages.length === 0) {
      toast.error("No images selected.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email. Try again.");
      return;
    }

    setLoading(true);

    const folderName = email + "_" + uuidv4();

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
                reject("Network response was not successful.");
              } else {
                resolve();
              }
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
      toast.success("Image(s) uploaded successfully", {
        description: "Check your email for the results.",
      });
      setSelectedImages([]);
      setLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      toast.error("Error uploading one or more images.");
      setLoading(false);
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
      <div className="my-[75px] flex w-9/12 flex-col gap-10 md:my-[120px] md:w-8/12 xl:w-6/12">
        <h1 className="text-2xl md:text-4xl">Upload your conversations</h1>
        <div className="flex flex-col gap-5">
          <label htmlFor="email" className="text-base">
            Email
          </label>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-1/3 "
          />
        </div>

        <Input
          ref={fileInputRef}
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

        <div className="flex gap-5">
          <Button
            onClick={handleImageUpload}
            className="text-base text-white md:w-1/3"
          >
            Upload Images
          </Button>
          {loading && <Spinner />}
        </div>
      </div>
    </main>
  );
};

export default Upload;
