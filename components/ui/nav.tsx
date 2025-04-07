"use client";
import { navItemsBottom, navItemsTop } from "@/lib/local-store";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="font-montserrat font-semibold ">
      <div className="flex justify-between items-center fixed top-6 w-full lg:p-4 p-2 z-10 ">
        {navItemsTop.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={`px-2 hover:underline-offset-4 hover:underline ${
              pathname === item.href
                ? "underline underline-offset-4"
                : "no-underline"
            }`}
          >
            <p
              className={` ${
                pathname === "/" || pathname === "/contact"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center fixed bottom-6 w-full lg:p-4 p-2 z-10">
        {navItemsBottom.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={`px-2 hover:underline-offset-4 hover:underline ${
              pathname === item.href
                ? "underline underline-offset-4"
                : "no-underline"
            }`}
          >
            <p
              className={` ${
                pathname === "/" || pathname === "/contact"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
