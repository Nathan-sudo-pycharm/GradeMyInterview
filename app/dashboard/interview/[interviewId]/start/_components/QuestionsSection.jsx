import { LightbulbIcon, Speaker, Volume2 } from "lucide-react";
import React from "react";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry Your browser does not supoort Text to Speech");
    }
  };
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-xl my-10">
        <div className="grid  grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => (
              <h2
                className={`p-2 bg-black rounded-xl  text-white  md:text-base text-center cursor-pointer ${
                  activeQuestionIndex == index && "bg-blue-600 text-black"
                }`}
              >
                Question {index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-white text-md md:text-lg p-5">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <div className="my-5 ">
          <Volume2
            className="cursor-pointer "
            size={30}
            onClick={() =>
              textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
            }
          />
        </div>
        <div className="border rounded-xl p-5 bg-[#FFF9C4] m">
          <h2 className="flex gap-5 ittems-center text-[#5D4037]">
            <LightbulbIcon />
            <strong>Note:</strong>
          </h2>
          <h2 className="font-medium text-sm my-2">
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
