"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ReactLenis } from "lenis/react";
import { FaApple, FaYoutube, FaSpotify } from "react-icons/fa";

interface ListenData {
  appleUrl: string;
  youtubeUrl: string;
  spotifyUrl: string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<ListenData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/ListenData");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result[0]); // Assuming `result` is an array, we take the first item
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
    }
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <Navbar animationDelay={0} disableAnimation={true} />
      <ReactLenis root>
        <div className="flex flex-col justify-center items-center my-64">
          <h1 className="font-[900] sm:text-7xl text-5xl">LISTEN</h1>
          <h2 className="mt-4 sm:text-2xl text px-4 sm:px-20 text-center">Showcasing the underrated artists in Ireland and beyond.</h2>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-8">
            {data && (
              <>
                <a href={data.youtubeUrl} className="select-none hover:opacity-80 transition ease-in-out w-full" target="_blank" rel="noopener noreferrer">
                  <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-8 flex items-center justify-center py-3 rounded-md whitespace-nowrap">
                    <FaYoutube className="mr-2 text-xl" />
                    Youtube
                  </h1>
                </a>
                <a href={data.appleUrl} className="select-none hover:opacity-80 transition ease-in-out w-full" target="_blank" rel="noopener noreferrer">
                  <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-8 flex items-center justify-center py-3 rounded-md whitespace-nowrap">
                    <FaApple className="mr-2 text-xl" />
                    Apple Podcasts
                  </h1>
                </a>
                <a href={data.spotifyUrl} className="select-none hover:opacity-80 transition ease-in-out w-full" target="_blank" rel="noopener noreferrer">
                  <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-8 flex items-center justify-center py-3 rounded-md whitespace-nowrap">
                    <FaSpotify className="mr-2 text-xl" />
                    Spotify
                  </h1>
                </a>
              </>
            )}
          </div>

          <div className="mt-24 hidden lg:block">
            <iframe
              width="728"
              height="409"
              src={data.youtubeUrl}
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
