import LoadingLayout from "@/components/animation/loading-layout";
import React from "react";

export default function Page() {
  return (
    <LoadingLayout>
      <div className=" h-screen flex flex-col justify-center items-center p-4">
        <div className="lg:w-[800px] w-96">
          <h1 className="font-montserrat font-medium text-5xl lg:text-6xl text-left  ">
            An experienced photographer and creative director - based in{" "}
            <span className="font-qrada text-3xl lg:font-normal font-semibold lg:text-6xl text-left ">
              Accra,Ghana.
            </span>
          </h1>

          <div className="flex   gap-6 mt-32 font-montserrat ">
            <p className="font-medium"> 06/2001</p>
            <p className="font-medium w-80">
              Richman was born in Adenta in 2001. Raised in a family with less
              or no form of artistic heritage. He never enrolled in any art
              school to study fine arts. All his skills were self - taught. He
              worked as a freelancer in a studio where he sharpened his skills
              in photography.
            </p>
          </div>
        </div>
      </div>
    </LoadingLayout>
  );
}
