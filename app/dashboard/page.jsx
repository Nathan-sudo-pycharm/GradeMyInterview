"use client";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";

const Dashboard = () => {
  return (
    <div className="p-10 ">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="text-gray-500">
        Create and Start your AI mockup Interview
      </h2>
      <div className="grid grid-cols1 md:grid-cols-3 m-5 ">
        <AddNewInterview />
      </div>
    </div>
  );
};

export default Dashboard;
