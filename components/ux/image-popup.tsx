import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

interface ImageItem {
  id: number;
  image: StaticImageData;
}

export default function ImagePopup({ images }: { images: ImageItem[] }) {
  return (
    <div
      className={`grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 place-items-center justify-items-center p-4`}
    >
      {images.map(({ id, image }) => (
        <Dialog key={id}>
          <DialogTrigger>
            <Image
              src={image}
              alt="image"
              className={`w-[200px] h-[350px] object-cover cursor-pointer hover:opacity-90 transition-opacity`}
            />
          </DialogTrigger>
          <DialogContent className=" bg-transparent z-[9999] border-none rounded-lg ">
            <DialogTitle className="sr-only">Image Preview</DialogTitle>
            <DialogHeader>
              <Image
                src={image}
                alt="image"
                priority={true}
                fetchPriority={"high"}
                quality={100}
                width={1920}
                height={1080}
                className={`w-full h-full border-4 bg-gray-300 border-white object-cover`}
              />{" "}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
