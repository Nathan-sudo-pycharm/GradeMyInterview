"use client";
import "../../globals.css";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useEffect } from "react";

const Header = () => {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow">
      {/* add logo or text here no logo as of now */}
      <Image src={"/logo.svg"} width={160} height={160} alt="logo" />
      <ul className="hidden md:flex gap-6 ">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard" && "text-primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/how" && "text-primary font-bold"
          }`}
        >
          Purpose
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/question" && "text-primary font-bold"
          }`}
        >
          About The Creator
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
