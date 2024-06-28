"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  const onContact = () => {
    router.push("/contact");
  };
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-300">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-2xl">IntelliMock</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/dashboard"
                className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline  focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="group inline-flex  h-9 items-center justify-center rounded-md  pr-3  text-sm font-medium transition-colors  focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <Button
                  className="bg-white text-black hover:bg-white  hover:underline text-sm"
                  onClick={onContact}
                >
                  {" "}
                  Contact
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main>
        <section className="bg-gradient-to-r from-white to-gray-300 py-20 px-8">
          <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="max-w-lg space-y-4 lg:pr-16">
              <h1 className="text-4xl font-bold text-blue-700">
                Your Personal AI Interview Coach
              </h1>
              <p className="text-xl text-red-300">
                Our AI-powered platform helps you prepare for your dream job.
              </p>
              <div className="flex gap-4">
                <Button className="border border-white p-2 text-lg hover:bg-green-700 hover:text-black">
                  Get Started
                </Button>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="500"
              height="400"
              alt="Hero"
              className="rounded-xl bg-red-200 mt-8 lg:mt-0"
            />
          </div>
        </section>
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#ffd700]">
                Powerful Features
              </h2>
              <p className="text-[#ff0000]">
                Our AI-powered platform offers a suite of features to help you
                ace your next interview.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <FeatureCard
                icon={<BoltIcon className="text-[#00ff00] h-8 w-8" />}
                title="AI-Powered Prep"
                description="Our AI assistant provides personalized interview prep and feedback."
              />
              <FeatureCard
                icon={<BriefcaseIcon className="text-[#ffd700] h-8 w-8" />}
                title="Job Matching"
                description="Find the perfect job opportunities that match your skills and experience."
              />
              <FeatureCard
                icon={<BarChartIcon className="text-[#00ff00] h-8 w-8" />}
                title="Performance Tracking"
                description="Monitor your progress and identify areas for improvement."
              />
              <FeatureCard
                icon={<UserIcon className="text-[#ffd700] h-8 w-8" />}
                title="Peer Feedback"
                description="Connect with a community of job seekers and get valuable feedback."
              />
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-[#000000] to-[#0c2240] py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#ffd700]">
                What Our Users Say
              </h2>
              <p className="text-[#ff0000]">
                Hear from real people who have used our platform to land their
                dream jobs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <UserFeedback
                avatar="/placeholder-user.jpg"
                name="John Doe"
                role="Software Engineer"
                feedback='"The AI-powered interview prep was a game-changer for me. I felt so much more confident going into my interviews."'
              />
              <UserFeedback
                avatar="/placeholder-user.jpg"
                name="Jane Smith"
                role="Product Manager"
                feedback='"I was able to land my dream job thanks to the personalized feedback and job matching features. Highly recommend!"'
              />
              <UserFeedback
                avatar="/placeholder-user.jpg"
                name="Michael Johnson"
                role="Data Scientist"
                feedback='"The peer feedback and performance tracking features were invaluable in helping me prepare for my interviews."'
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0c2240] py-8 px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <BoltIcon className="text-[#00ff00] h-6 w-6" />
            <span className="text-lg font-bold">AI Interview</span>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-[#ffd700] hover:text-white"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[#ffd700] hover:text-white"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-[#ffd700] hover:text-white"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#0c2240] rounded-lg p-6 space-y-4">
      {icon}
      <h3 className="text-xl font-bold text-[#ffd700]">{title}</h3>
      <p className="text-[#ff0000]">{description}</p>
    </div>
  );
}

function UserFeedback({ avatar, name, role, feedback }) {
  return (
    <Card className="bg-[#0c2240] p-6 space-y-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-bold text-[#00ff00]">{name}</h4>
          <p className="text-[#ff0000]">{role}</p>
        </div>
      </div>
      <p className="text-[#ff0000]">{feedback}</p>
    </Card>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
