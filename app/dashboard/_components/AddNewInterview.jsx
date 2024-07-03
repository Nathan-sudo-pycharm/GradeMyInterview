"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { v4 as uuidv4 } from "uuid";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";
import { useRouter } from "next/navigation";
import { SparklesCore } from "@/components/ui/Sparkles";

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExp, setJobExp] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(jobPosition, jobDesc, jobExp);

    const InputPrompt =
      "Job Position : " +
      jobPosition +
      " . Job description : " +
      jobDesc +
      ". Years of experience : " +
      jobExp +
      ". with the given details generate me " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " questions ranging from easy to hard level questions and also give the answers , no need to specify the level and topic .Give in json format";

    const result = await chatSession.sendMessage(InputPrompt);

    const MockJsonResponse = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(MockJsonResponse));
    setJsonResponse(MockJsonResponse);
    if (MockJsonResponse) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResponse,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExp: jobExp,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-YYYY"),
        })
        .returning({ mockId: MockInterview.mockId });
      console.log("insered id", resp);
      if (resp) {
        setOpenDialog(false);
        router.push("/dashboard/interview/" + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR!!");
    }
    setLoading(false);
  };
  return (
    <div className="">
      <div>
        <div
          className="relative p-10 border rounded-lg bg-black border-neutral-500 text-white hover:scale-105 hover:shadow-md cursor-pointer transition-all"
          onClick={() => setOpenDialog(true)}
        >
          <SparklesCore
            background="transparent"
            minSize={0.5}
            maxSize={1.5}
            particleDensity={100}
            className="absolute inset-0 w-full h-full"
            particleColor="#1B03A3"
          />
          <h2 className="relative font-bold text-2xl text-center z-10">
            + New Interview
          </h2>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger></DialogTrigger>
          <DialogContent className="bg-neutral-950 max-w-3xl h-[30rem] items-center">
            <DialogHeader>
              <DialogTitle className="text-2xl text-red-800">
                Tell us more about your Job Interview
              </DialogTitle>
              <DialogDescription>
                <form onSubmit={onSubmit}>
                  <div>
                    <h2 className="text-base">
                      Add details about your job position/role, job description,
                      and experience
                    </h2>
                    <div className="mt-7 my-3  pb-2">
                      <label className="text-base  ">Job Role</label>
                      <Input
                        placeholder="Full-Stack Developer"
                        className="rounded-xl text-base bg-neutral-950"
                        required
                        onChange={(event) => setJobPosition(event.target.value)}
                      />
                    </div>
                    <div className="mt-3 my-3 pb-2">
                      <label className="text-base  ">
                        Job Description/Tech-stack
                      </label>
                      <Textarea
                        placeholder="Type your tech-stack here. Example: React JS, Flutter etc."
                        className="rounded-xl text-base   bg-neutral-950"
                        required
                        onChange={(event) => setJobDesc(event.target.value)}
                      />
                    </div>
                    <div className="mt-3 my-3">
                      <label className="text-base  ">Years of Experience</label>
                      <Input
                        placeholder="0 or More"
                        type="number"
                        className="rounded-xl text-base bg-neutral-950"
                        required
                        max="60"
                        onChange={(event) => setJobExp(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 justify-end pt-2">
                    <Button
                      className="bg-red-700 text-white rounded-xl"
                      type="button"
                      onClick={() => setOpenDialog(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-black text-white border border-blue-800 rounded-xl"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <LoaderCircle className="animate-spin" />
                          Generating from AI
                        </>
                      ) : (
                        "Start Interview"
                      )}
                    </Button>
                  </div>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddNewInterview;
