"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Maven_Pro } from "next/font/google";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function Home() {
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.onended = () => setVideoFinished(true);
    }
  }, []);

  useEffect(() => {
    if (videoFinished && mainContentRef.current) {
      const tl = gsap.timeline();
      tl.to(mainContentRef.current, { opacity: 1, duration: 0.8, ease: "power4.inOut" })
        .fromTo("#mabfield", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: "bounce.out" }, "-=0.4")
        .fromTo("#heading", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: "bounce.out" }, "-=0.3")
        .fromTo("#links", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: "bounce.out" }, "-=0.2");
    }
  }, [videoFinished]);

  return (
    <div className="relative">
      {!videoFinished && (
        <div className="fixed inset-0 z-50">
          <video ref={videoRef} className="w-full h-full object-cover filter grayscale" src="/video.mp4" autoPlay muted playsInline preload="auto" />
        </div>
      )}

      <div ref={mainContentRef} className="flex min-h-screen flex-col items-center justify-center pb-24 px-4 text-black opacity-0">
        <div className="absolute inset-0 -z-10">
          <video className="w-full h-full object-cover filter grayscale" src="/altVideo.mp4" autoPlay loop muted playsInline preload="auto" />
        </div>

        <div className="z-50 text-center mt-0">
          <p className=" font-[900] sm:text-[4.5rem] max-w-3xl  text-[2rem] leading-[1.1] text-black "> ALTERNATIVE MUSIC VIA IRELAND.</p>{" "}
        </div>

        <div id="links" className="flex justify-between gap-12 mt-12 font-[500]">
          <a href="/" className="select-none hover:opacity-80 transition ease-in-out">
            <h1 className="bg-black text-white px-5 py-3 border-2 rounded-md">Latest Episode</h1>
          </a>
          <a href="/" className="select-none hover:opacity-80 transition ease-in-out">
            <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-5 py-3 rounded-md">All Episodes</h1>
          </a>
        </div>
      </div>
      <div className="bg-red-800"></div>
    </div>
  );
}
