"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { ReactLenis } from "lenis/react";
import { FaApple, FaYoutube, FaSpotify } from "react-icons/fa";
import Episode from "../components/Episode";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar animationDelay={0} disableAnimation={true} />
      <ReactLenis root>
        <div className="flex flex-col justify-center items-center my-64">
          <h1 className="font-[900] sm:text-7xl text-5xl">EPISODES</h1>
          <h2 className="mt-4 sm:text-2xl text">
            The latest in alternative sounds via Ireland.
          </h2>

          <div className="flex flex-col px-4 sm:px-12 w-full mt-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
              <Episode />
              <Episode />
              <Episode />
              <Episode />
            </div>
          </div>
        </div>
      </ReactLenis>
    </div>
  );
};

export default Page;
