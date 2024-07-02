import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import Interview from "../interview/[interviewId]/page";

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };
  const onFeedback = () => {
    router.push("/dashboard/interview/" + interview?.mockId + "/feedback");
  };
  return (
    <div className="border shadow-sm  rounded-xl p-3 ">
      <h2 className="font-bold text-xl text-blue-700">
        {interview?.jobPosition}
      </h2>
      <h2 className="text-base text-gray-200">
        {interview?.jobExp} {""}Year/s of Experience
      </h2>
      <h2 className="text-base text-gray-500">
        Created On :{""} {interview?.createdAt}
      </h2>
      <div className="flex justify-between mt-2 gap-5">
        <Button
          size="sm"
          className="w-full text-white border border-gray-300 hover:bg-gray-100 bg-black rounded-xl"
          onClick={onFeedback}
        >
          Feedback
        </Button>
        <Button
          onClick={onStart}
          size="sm"
          className="w-full  rounded-xl text-white"
        >
          Revise Aagin
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
