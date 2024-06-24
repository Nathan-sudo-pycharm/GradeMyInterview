"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);
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
      <h2 className="text-3xl font-bold text-green-500"> Congratulations </h2>
      <h2 className="font-bold text-2xl pt-5">
        Here is your Mock Interview Feedback
      </h2>
      <h2 className="text-primary text-lg my-3">
        Your overall interview rating: <strong>7/10</strong>
      </h2>
      <h2 className="text-sm text-gray-500">
        Below, you will find the interview questions along with the correct
        answers, your responses, and feedback .
      </h2>
    </div>
  );
};

export default Feedback;
