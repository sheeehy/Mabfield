"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { ReactLenis } from "lenis/react";
import { FaApple, FaYoutube, FaSpotify } from "react-icons/fa";

interface ListenData {
  appleUrl: string;
  youtubeUrl: string;
  spotifyUrl: string;
}

const Page: React.FC = () => {
  const [data, setData] = React.useState<ListenData | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/ListenData");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result[0]); // Assuming `result` is an array
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
    }
    fetchData();
  }, []);

  const youtubeThumbnail = data ? `https://img.youtube.com/vi/${data.youtubeUrl.split("v=")[1].split("&")[0]}/hqdefault.jpg` : null;

  return (
    <div>
      <Navbar animationDelay={0} disableAnimation={true} />
      <ReactLenis root>
        <div className="flex flex-col justify-center items-center my-64">
          <h1 className="font-[900] sm:text-7xl text-5xl">LISTEN</h1>
          <h2 className="mt-4 sm:text-2xl text px-4 sm:px-20 text-center">Showcasing the hidden gems in Ireland and beyond.</h2>
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
          <div className="flex justify-center w-full">
            <div className="mt-12 hidden lg:block relative w-full max-w-xl">
              {youtubeThumbnail && (
                <a href={data?.youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <img
                      src={youtubeThumbnail}
                      alt="YouTube Video Thumbnail"
                      className="absolute top-0 left-0 w-full h-full object-cover hover:opacity-80 transition ease-in-out"
                    />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </ReactLenis>
    </div>
  );
};

export default Page;
