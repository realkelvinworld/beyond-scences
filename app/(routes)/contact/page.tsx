import LoadingLayout from "@/components/animation/loading-layout";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <LoadingLayout>
      <div className="h-screen bg-black flex flex-col justify-center items-center  font-amoria">
        <Link
          href="tel:+233205489263"
          className="text-white lg:text-9xl text-6xl  "
        >
          +233 <br /> 20 5489263
        </Link>
        <Link
          href="mailto:christetteh911@protonmail.com"
          className="text-white lg:text-7xl text-2xl "
        >
          christetteh911@protonmail.com
        </Link>
      </div>
    </LoadingLayout>
  );
}
