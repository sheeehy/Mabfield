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
          <video id="intro-video" className="w-full h-full object-cover filter grayscale" src="/video.mp4" autoPlay muted playsInline />
        </div>
      )}

      {videoFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
          className="flex min-h-screen flex-col items-center py-24 px-4 bg-black text-white"
        >
          {/* Mabfield animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            className="mt-44"
          >
            <Mabfield />
          </motion.div>

          {/* H2 tag animation with delay */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            className="text-white mt-28 font-[900]"
          >
            HIP HOP CULTURE & ALTERNATIVE SOUNDS VIA IRELAND.
          </motion.h2>

          {/* Links animation with delay */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
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
