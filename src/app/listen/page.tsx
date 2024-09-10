"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { ReactLenis } from "lenis/react";
import { FaApple, FaYoutube, FaSpotify } from "react-icons/fa";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar animationDelay={0} disableAnimation={true} />
      <ReactLenis root>
        <div className="flex flex-col justify-center items-center my-64">
          <h1 className="font-[900] sm:text-7xl text-5xl">LISTEN</h1>
          <h2 className="mt-4 sm:text-2xl text">
            The latest in alternative sounds via Ireland.
          </h2>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-8">
            <a
              href="https://www.youtube.com/@Mabfield"
              className="select-none hover:opacity-80 transition ease-in-out w-full"
              target="_blank" // Keep w-full for smaller screens
            >
              <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-8 flex items-center justify-center py-3 rounded-md whitespace-nowrap">
                <FaYoutube className="mr-2 text-xl" />
                Youtube
              </h1>
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/mabcast/id1451452272?l=fr-EN"
              className="select-none hover:opacity-80 transition ease-in-out w-full"
              target="_blank" // Same change as above
            >
              <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-8 flex items-center justify-center py-3 rounded-md whitespace-nowrap">
                <FaApple className="mr-2 text-xl" />
                Apple Podcasts
              </h1>
            </a>
            <a
              href="https://open.spotify.com/show/7Dwtks2wLibEbLivC01ulf?si=e8a678bee2954359"
              className="select-none hover:opacity-80 transition ease-in-out w-full"
              target="_blank" // Same change as above
            >
              <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-8 flex items-center justify-center py-3 rounded-md whitespace-nowrap">
                <FaSpotify className="mr-2 text-xl" />
                Spotify
              </h1>
            </a>
          </div>

          <div className="mt-24 hidden lg:block ">
            <iframe
              width="728"
              height="409"
              src="https://www.youtube.com/embed/7cJnNDuT0XM?si=7rHQnLLttXfjbJ0v"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            ></iframe>
          </div>
        </div>
      </ReactLenis>
    </div>
  );
};

export default Page;
