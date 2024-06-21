import "../../globals.css";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow">
      {/* add logo or text here no logo as of now */}
      <Image
        src={"/sunglasses.png"}
        width={160}
        height={160}
        alt="
      logo"
      />
      <ul className="flex gap-6">
        <li>Dashboard</li>
        <li>question</li>
        <li>upgrade</li>
        <li>how it works</li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
