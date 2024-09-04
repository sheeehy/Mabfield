"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Maven_Pro } from "next/font/google";
import Image from "next/image"

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
        .fromTo("#mainHeading", 
          { opacity: 0, y: 30, scale: 0.9 }, 
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" },
          "-=0.6"
        )
        .fromTo("#links", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "back.out(2)" }, "-=0.8")
        .fromTo("#altVideo", { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.inOut" }, "-=0.4");
    }
  }, [videoFinished]);

  return (
    <div className="relative">
      {!videoFinished && (
        <div className="fixed inset-0 z-50 hidden sm:block">
          <video ref={videoRef} className="w-full h-full object-cover filter grayscale" src="/video.mp4" autoPlay muted playsInline preload="auto" />
        </div>
      )}

      <div ref={mainContentRef} className="flex min-h-screen flex-col items-center justify-center sm:pb-24 pb-8  px-4 text-black opacity-0">
        <div id="altVideo" className="absolute inset-0 -z-10 opacity-0 hidden sm:block" style={{ top: '-13vh' }}>
          <video className="w-full h-[110vh] object-cover filter grayscale" src="/altVideo2.mp4" autoPlay loop muted playsInline preload="auto" />
        </div>

        <div className="z-10 text-center mt-0">
          <p id="mainHeading" className="font-[900] text-[2rem] sm:text-[4rem] max-w-2xl leading-[1.1] text-black">
            ALTERNATIVE MUSIC VIA IRELAND.
          </p>
        </div>

        <div id="links" className="flex  sm:flex-row justify-center gap-6 sm:gap-12 mt-8 sm:mt-12 font-[500]">
          <a href="/" className="select-none hover:opacity-80 transition ease-in-out w-full sm:w-40">
            <h1 className="bg-black text-white px-5 py-3 border-2 rounded-md text-center whitespace-nowrap">Latest Episode</h1>
          </a>
          <a href="/" className="select-none hover:opacity-80 transition ease-in-out w-full sm:w-40">
            <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-5 py-3 rounded-md text-center whitespace-nowrap">All Episodes</h1>
          </a>
        </div>
        <div>
        <div className="block lg:hidden mt-20 ">
          <Image
            src="/Mobile1.png"
            alt="Mobile App Screenshot"
            width={250}
            height={500}
            quality={100}
            priority={true}
            className=""
          />
        </div>
        </div>
      </div>
    </div>
  );
}
