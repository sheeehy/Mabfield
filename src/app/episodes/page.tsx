"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ReactLenis } from "lenis/react";
import Episode from "../components/Episode";
import ScaleLoader from "react-spinners/ScaleLoader";

interface EpisodeData {
  title: string;
  thumbnailUrl: string;
  duration: string;
  releaseDate: string;
  description: string;
  watchUrl: string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<EpisodeData[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/EpisodeData");
        const result = await res.json();
        if (res.ok) {
          setData(result);
        } else {
          console.error(result.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar animationDelay={0} disableAnimation={true} />
      <ReactLenis root>
        <div className="flex flex-col justify-center items-center my-64">
          <h1 className="font-[900] sm:text-7xl text-5xl">EPISODES</h1>
          <h2 className="mt-4 sm:text-2xl">
            The latest in alternative sounds via Ireland.
          </h2>

          <div className="flex flex-col px-4 sm:px-12 w-full mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {data && data.length > 0 ? (
                data.map((episode, index) => (
                  <Episode
                    key={index}
                    title={episode.title}
                    thumbnailUrl={episode.thumbnailUrl}
                    duration={episode.duration}
                    releaseDate={episode.releaseDate}
                    description={episode.description}
                    watchUrl={episode.watchUrl}
                  />
                ))
              ) : (
                <div className="w-full flex justify-center"></div>
              )}
            </div>
          </div>
        </div>
      </ReactLenis>
    </div>
  );
};

export default Page;
