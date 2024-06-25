"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsDown, ChevronsUpDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    GetFeedback();
  }, []);
  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    console.log(result);
    setFeedbackList(result);
  };
  return (
    <div className="p-10">
      {feedbackList?.length == 0 ? (
        <h2 className="font-bold text-xl text-gray-500">
          No Feedback Record Found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">
            {" "}
            Congratulations{" "}
          </h2>
          <h2 className="font-bold text-2xl pt-5">
            Here is your Mock Interview Feedback
          </h2>
          <h2 className="text-sm text-gray-500">
            Below, you will find the interview questions along with the correct
            answers, your responses, and feedback .
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="p-2 flex gap-7 w-full   justify-between  bg-gray-100 rounded-lg my-2 text-left">
                  {item.question}
                  <ChevronsDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2 ">
                    {" "}
                    <h2 className="text-red-500 p-2 border rounded-lg ">
                      <strong> {item.rating}</strong>
                    </h2>
                    <h2 className="p-2 border rounded-xl text-sm text-red-900 bg-red-50 ">
                      <strong>Your Answer </strong>
                      {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-xl text-sm text-green-900 bg-green-50 ">
                      <strong>Correct Answer </strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-xl text-sm text-yellow-900 bg-yellow-50 ">
                      <strong>Feedback </strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          <Button
            className="bg-black mt-6 text-purple-600"
            onClick={() => router.replace("/dashboard")}
          >
            Home Page
          </Button>
        </>
      )}{" "}
    </div>
  );
};

export default Feedback;
