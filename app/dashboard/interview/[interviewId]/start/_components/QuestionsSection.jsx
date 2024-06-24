import { LightbulbIcon } from "lucide-react";
import React from "react";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-xl my-10">
        <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => (
              <h2
                className={`p-2 bg-black rounded-xl text-white  md:text-base text-center cursor-pointer ${
                  activeQuestionIndex == index && "bg-black text-[#FFD700]"
                }`}
              >
                Question {index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-md md:text-lg p-5">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <div className="border rounded-xl p-5 bg-[#FFF9C4]">
          <h2 className="flex gap-5 ittems-center text-[#5D4037]">
            <LightbulbIcon />
            <strong>Note:</strong>
          </h2>
          <h2 className="font-medium">
            Click <span>Record Answer</span> when you are ready to respond to a
            question. At the end of the interview, you will receive feedback,
            including the correct answer for each question, your response, and a
            comparison between the two.
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;
