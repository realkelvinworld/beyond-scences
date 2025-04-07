import LoadingLayout from "@/components/animation/loading-layout";
import { ArrowRight } from "lucide-react";
import { HomeImage } from "@/lib/image";
import Image from "next/image";

export default function Home() {
  return (
    <LoadingLayout>
      <div className="bg-black h-screen flex flex-col  justify-center items-center">
        <div className=" relative ">
          <Image src={HomeImage} alt="HomeImage" className="hidden lg:block" />
          <Image
            src={HomeImage}
            alt="HomeImage"
            height={500}
            className="block lg:hidden"
          />
        </div>
        <div className="absolute top-[calc(1/1.8 * 100%)] flex gap-2 items-center justify-center">
          <h1 className="font-qrada  text-white text-5xl lg:text-9xl text-center">
            Portrait
          </h1>
          <div className=" border rounded-full border-white p-4 mt-4 flex items-center justify-center">
            <ArrowRight className="text-white  " />
          </div>
        </div>
      </div>
    </LoadingLayout>
  );
}
