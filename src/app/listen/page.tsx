"use client";
import React from "react";
import Navbar from "../components/Navbar";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar animationDelay={0} disableAnimation={true} />
      <div className="flex justify-center items-center my-64">
        <h1 className="font-[900] text-7xl ">LISTEN</h1>{" "}
      </div>
    </div>
  );
};

export default Page;
