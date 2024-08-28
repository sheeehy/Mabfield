"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Mabfield from "./components/Mabfield";

export default function Home() {
  const [videoFinished, setVideoFinished] = useState(false);

  useEffect(() => {
    const video = document.getElementById("intro-video") as HTMLVideoElement;
    if (video) {
      video.play();
      video.onended = () => setVideoFinished(true);
    }
  }, []);

  return (
    <div className="relative">
      {!videoFinished && (
        <div className="fixed top-0 left-0 w-full h-full z-50">
          <video id="intro-video" className="w-full h-full object-cover" src="/video.mp4" autoPlay muted playsInline />
        </div>
      )}

      {videoFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex min-h-screen flex-col items-center py-24 px-4 bg-black text-white"
        >
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mt-44">
            <Mabfield />

            <h2 className="text-white mt-28 font-[900]">HIP HOP CULTURE & ALTERNATIVE SOUNDS VIA IRELAND.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-between gap-12 mt-24 font-[500]"
          >
            <a href="/listen" className="select-none hover:opacity-80 transition ease-in-out">
              <h1 className="bg-white text-black px-5 py-3 rounded-md">Latest Episode</h1>
            </a>
            <a href="/episodes" className="select-none hover:opacity-80 transition ease-in-out">
              <h1 className="bg-zinc-800 text-white px-5 py-3 rounded-md">All Episodes</h1>
            </a>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
