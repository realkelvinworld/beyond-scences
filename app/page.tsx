import LoadingLayout from "@/components/animation/loading-layout";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/components/motion-primitives/carousel";
import { carouselImages } from "@/lib/local-store";

export default function Home() {
  return (
    <LoadingLayout>
      <div className="bg-black h-[100dvh] flex flex-col  justify-center items-center">
        <Carousel>
          <CarouselContent>
            {carouselImages.map((c) => (
              <CarouselItem key={c.id} className="p-4">
                <div className="flex  items-center justify-center ">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    className="object-cover hidden lg:block"
                    height={600}
                  />
                  <Image
                    src={c.src}
                    alt={c.alt}
                    className="object-cover lg:hidden block"
                    height={400}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation
            alwaysShow
            className="flex items-center justify-between  "
          />
          <CarouselIndicator />
        </Carousel>
        {/* <div className=" relative ">
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
        </div> */}
      </div>
    </LoadingLayout>
  );
}
