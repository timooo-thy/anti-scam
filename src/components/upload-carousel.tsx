import * as React from "react";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import Image from "next/image";

interface UploadCarouselProps {
  images: File[];
}

export function UploadCarousel({ images }: UploadCarouselProps) {
  const [imageURLs, setImageURLs] = React.useState<string[]>([]);

  const createURL = (image: File) => {
    const url = URL.createObjectURL(image);
    return url;
  };

  React.useEffect(() => {
    const newURLs = images.map((image) => createURL(image));
    setImageURLs(newURLs);
  }, [images]);

  return (
    <Carousel className="w-10/12  md:w-full">
      <CarouselContent>
        {Array.from({ length: images.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {imageURLs[index] && (
                    <Image
                      src={imageURLs[index]}
                      alt={`Uploaded image ${index + 1}`}
                      width={350}
                      height={350}
                    />
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
