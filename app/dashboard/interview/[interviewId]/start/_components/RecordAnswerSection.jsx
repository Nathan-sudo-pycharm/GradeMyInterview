"use client";
import Webcam from "react-webcam";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, OctagonPause } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import { chatSession } from "@/utils/GeminiAIModel";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserAnswer } from "@/utils/schema";
import { db } from "@/utils/db";
const RecordAnswerSection = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) => {
  const { toast } = useToast();
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);
  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswerInDb();
    }
    if (userAnswer?.length < 10) {
      setLoading(false);
      toast({
        description: "Answer has been Recorded",
        className:
          "bg-white font-semibold text-green-700 shadow-green-200 rounded-xl justify-center items-center text-center",
      });
      return;
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };
  const UpdateUserAnswerInDb = async () => {
    console.log(userAnswer);
    setLoading(true);
    const feedbackPrompt =
      "Question" +
      mockInterviewQuestion[activeQuestionIndex]?.question +
      ",User Answer :" +
      userAnswer +
      ",Depending on the question, please rate the user's answer in this interview. " +
      "please provide the correct answer in JSON format and sum up what the user must further learn." +
      "including a rating field and a feedback field,";
    const result = await chatSession.sendMessage(feedbackPrompt);
    const mockJsonRes = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(mockJsonRes);
    const JsonFeedbackResp = JSON.parse(mockJsonRes);
    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterviewQuestion[activeQuestionIndex]?.question,
      answerBy: interviewData?.createdBy,
      correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: JsonFeedbackResp?.feedback,
      rating: JsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-YYYY"),
    });
    if (resp) {
      toast("Your Answer is saved successfully");
      setUserAnswer("");
      setResults([]);
    }
    setResults([]);
    setLoading(false);
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col  justify-center items-center rounded-xl p-5 mt-32 bg-black">
        <Image
          src={"/images/webcamimg.png"}
          alt="WebCam"
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam
          mirrored={"True"}
          style={{ height: 300, width: "100%", zIndex: 10 }}
        />
      </div>
      <Button
        disable={loading}
        className="my-10 bg-white text-red-700 text-base border-red-600 rounded-xl  border hover:shadow-red-700 "
        onClick={StartStopRecording}
      >
        {"    "}
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2">
            <OctagonPause /> Stop Recording..
          </h2>
        ) : (
          <>
            <Mic size={20} /> Record Answer
          </>
        )}
      </Button>
    </div>
  );
};

export default RecordAnswerSection;
