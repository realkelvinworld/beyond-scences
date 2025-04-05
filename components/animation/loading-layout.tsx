"use client";
import { LoadingAnimation } from "@/components/animation/loading";
import { useEffect, useState } from "react";

export default function LoadingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <LoadingAnimation /> : children}</>;
}
