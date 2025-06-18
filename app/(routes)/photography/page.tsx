import LoadingLayout from "@/components/animation/loading-layout";
import React from "react";

export default function Page() {
  return (
    <LoadingLayout>
      <div className="h-screen p-5 flex flex-col justify-center items-center">
        <h1 className="font-qrada  text-5xl text-center">Coming Soon</h1>
      </div>
    </LoadingLayout>
  );
}
