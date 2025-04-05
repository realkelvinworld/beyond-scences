import LoadingLayout from "@/components/animation/loading-layout";
import React from "react";

export default function Page() {
  return (
    <LoadingLayout>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-qrada  text-6xl text-center">Coming Soon</h1>
      </div>
    </LoadingLayout>
  );
}
