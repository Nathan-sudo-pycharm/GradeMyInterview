"use client";

import { useState } from "react";
import { toast } from "sonner";
import { db } from "@/utils/db";
import { contactform } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import BackgroundBeams from "@/components/ui/BackgroundBeams";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [contactno, setContactno] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add the data to the database
      const resp = await db.insert(contactform).values({
        name: name,
        contactno: contactno,
        email: email || user?.primaryEmailAddress?.emailAddress,
        message: message,
      });

      if (resp) {
        console.log("Data Added Successfully");
        toast(
          "Your response has been successfully recorded. We will contact you shortly."
        );
      }
    } catch (error) {
      console.error("Error adding data:", error);
      toast("Error recording your response. Please try again later.", {
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact IntelliMock
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block pt-2 text-gray-700 font-bold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactno"
              className="block pt-2 text-gray-700 font-bold"
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contactno"
              value={contactno}
              onChange={(e) => setContactno(e.target.value)}
              className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              placeholder="Enter your contact number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block pt-2 text-gray-700 font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold pt-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
              rows="4"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex items-center justify-center">
            <BackgroundGradient className="rounded-[22px] dark:bg-zinc-900">
              <button
                type="submit"
                className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </BackgroundGradient>
          </div>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
