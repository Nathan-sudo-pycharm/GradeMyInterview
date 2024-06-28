"use client";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center">
      <header className="w-full  bg-neutral-950 py-4 flex justify-between items-center px-6 md:px-12 shadow">
        <div className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-700 text-center font-sans font-bold">
          IntelliMock
        </div>
        <nav className="space-x-4 text-end text-lg">
          <a href="/dashboard" className="text-white  hover:underline">
            Get Started
          </a>
          <a href="/dashboard" className="text-white hover:underline">
            Contact Us
          </a>
        </nav>
      </header>
      <div className="w-full h-0.5 bg-gradient-to-r from-white via-red-500 to-purple-500"></div>

      <main className="flex flex-col md:flex-row items-center justify-center text-center px-6 md:px-12 mt-12 w-full">
        <div className="md:w-1/2">
          <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">
            The blockspace ecosystem for boundless innovation
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Get your Web3 ideas to market fast with economics that work for you
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full text-lg">
            Learn about blockspace
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <img
            src="https://via.placeholder.com/800"
            alt="Polkadot blocks"
            className="w-full max-w-3xl"
          />
        </div>
      </main>
      <style jsx>{`
        .shadow-custom {
          box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05),
            0 0 20px 0 rgba(0, 0, 0, 0.05), 0 0 40px 0 rgba(18, 113, 255, 0.4),
            0 0 60px 0 rgba(221, 74, 255, 0.4),
            0 0 80px 0 rgba(100, 220, 255, 0.4),
            0 0 100px 0 rgba(200, 50, 50, 0.4),
            0 0 120px 0 rgba(180, 180, 50, 0.4);
          animation: shadow-move 5s ease infinite;
        }

        @keyframes shadow-move {
          0% {
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05),
              0 0 20px 0 rgba(0, 0, 0, 0.05), 0 0 40px 0 rgba(18, 113, 255, 0.4),
              0 0 60px 0 rgba(221, 74, 255, 0.4),
              0 0 80px 0 rgba(100, 220, 255, 0.4),
              0 0 100px 0 rgba(200, 50, 50, 0.4),
              0 0 120px 0 rgba(180, 180, 50, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05),
              0 0 20px 0 rgba(0, 0, 0, 0.05),
              0 0 120px 0 rgba(18, 113, 255, 0.4),
              0 0 100px 0 rgba(221, 74, 255, 0.4),
              0 0 80px 0 rgba(100, 220, 255, 0.4),
              0 0 60px 0 rgba(200, 50, 50, 0.4),
              0 0 40px 0 rgba(180, 180, 50, 0.4);
          }
          100% {
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05),
              0 0 20px 0 rgba(0, 0, 0, 0.05), 0 0 40px 0 rgba(18, 113, 255, 0.4),
              0 0 60px 0 rgba(221, 74, 255, 0.4),
              0 0 80px 0 rgba(100, 220, 255, 0.4),
              0 0 100px 0 rgba(200, 50, 50, 0.4),
              0 0 120px 0 rgba(180, 180, 50, 0.4);
          }
        }
      `}</style>
    </div>
  );
};

export default page;
