"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Mabfield from "./components/Mabfield";
import { Maven_Pro } from "next/font/google";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function Home() {
  const [videoFinished, setVideoFinished] = useState(false);

  useEffect(() => {
    const video = document.getElementById("intro-video") as HTMLVideoElement;
    if (video) {
      video.play();
      video.onended = () => setVideoFinished(true);
    }
  }, []);

  useEffect(() => {
    if (videoFinished) {
      // Fade in the main content
      gsap.to("#main-content", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      // Mabfield animation
      gsap.fromTo("#mabfield", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "bounce.out", delay: 0.1 });

      // H2 tag animation
      gsap.fromTo("#heading", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "bounce.out", delay: 0.6 });

      // Links animation
      gsap.fromTo("#links", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: "bounce.out", delay: 0.7 });
    }
  }, [videoFinished]);

  return (
    <div className="relative ">
      {!videoFinished && (
        <div className="fixed top-0 left-0 w-full h-full z-50">
          <video id="intro-video" className="w-full h-full object-cover filter grayscale" src="/video3.mp4" autoPlay muted playsInline />
        </div>
      )}

      {videoFinished && (
        <div
          id="main-content"
          className="flex min-h-screen flex-col items-center py-24 px-4 text-black bg-gradient-to-b from-white to-transparent"
          style={{ opacity: 0 }} // Start with opacity 0 for GSAP animation
        >
          {/* Your content goes here */}

          {/* H2 tag animation */}
          <div className="">
            <h2 id="heading" className="text-black mt-28 font-[900] text-3xl font-[Inter] text-center z-10">
              ALTERNATIVE MUSIC VIA IRELAND.
            </h2>
          </div>

          {/* Links animation */}
          <div id="links" className="flex justify-between gap-12 mt-20 font-[500]">
            <a href="/listen" className="select-none hover:opacity-80 transition ease-in-out">
              <h1 className="bg-black text-white px-5 py-3 border-2 rounded-md">Latest Episode</h1>
            </a>
            <a href="/episodes" className="select-none hover:opacity-80 transition ease-in-out">
              <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-5 py-3 rounded-md">All Episodes</h1>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
