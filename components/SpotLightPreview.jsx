"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Spotlight from "@/components/ui/Spotlight"; // Assuming Spotlight is exported as default from "../ui/spotlight"
import HoverBorderGradient from "@/components/ui/HoverBorderGradient";

function SpotLightPreview() {
  const router = useRouter();

  const dashboardClick = () => {
    router.push("/dashboard");
  };

  const contactClick = () => {
    router.push("/contact");
  };

  return (
    <div className="">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="h-[50rem] min-h-screen w-full bg-black bg-grid-white/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 bg-opacity-50">
            Ace Your Interview Skills with <br />
            <span className="text-8xl bg-gradient-to-b bg-clip-text text-transparent from-neutral-100 to-[#fdea00] ">
              IntelliMock
            </span>
          </h1>
          <div className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
            IntelliMock offers AI-based mock interviews, boosting user's
            interview skills, confidence, and preparation for career success
            with realistic practice."
          </div>
          <div className="flex gap-20 md:gap-10 sm:gap-10 flex-col align-middle justify-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <HoverBorderGradient
              containerClassName="rounded-full p-1"
              as="button"
              onClick={dashboardClick}
              className="bg-black text-lg text-[#6c00ff] dark:text-white flex items-center space-x-2"
            >
              <span>Get Started</span>
            </HoverBorderGradient>
            <HoverBorderGradient
              containerClassName="rounded-full p-1"
              as="button"
              onClick={contactClick}
              className="bg-black text-lg text-red-300 dark:text-white flex items-center space-x-2"
            >
              <span>Contact Us</span>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotLightPreview;
