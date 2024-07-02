"use client";
import "../../globals.css";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
const Header = () => {
  const { user } = useUser();
  const router = useRouter();

  const contactClick = () => {
    router.push("/contact");
  };
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div>
      <div className="flex p-4 items-center justify-between bg-black shadow">
        {/* add logo or text here no logo as of now */}
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 text-3xl font-semibold">
          IntelliMock
        </h1>
        <ul className="hidden md:flex gap-6 ">
          <Link href="/">
            {" "}
            <li
              className={`text-neutral-500 font-bold transition-all cursor-pointer ${
                path == "/" && "text-primary font-bold"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/contact">
            {" "}
            <li
              className={`text-neutral-500 font-bold transition-all cursor-pointer ${
                path == "/" && "text-base font-bold"
              }`}
            >
              Contact
            </li>
          </Link>
          <Link href="https://nathansequeirafinal.vercel.app/">
            {" "}
            <li
              className={`text-neutral-500 font-bold transition-all cursor-pointer ${
                path == "/" && "text-primary font-bold"
              }`}
            >
              About The Creator
            </li>
          </Link>
        </ul>
        <div className=" flex flex-cols-1 gap-5">
          {user ? (
            <p className="text-white">{user.firstName}</p>
          ) : (
            <p>Loading...</p>
          )}
          <UserButton />
        </div>
        {/* */}
      </div>
      <div className="w-screen   relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-screen blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-screen" />
      </div>
    </div>
  );
};

export default Header;
