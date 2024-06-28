"use client";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols1 md:grid-cols-3 m-5 ">
        <AddNewInterview />
      </div>

      <InterviewList />
    </div>
  );
};

export default Dashboard;
