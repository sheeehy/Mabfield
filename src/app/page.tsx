"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Maven_Pro } from "next/font/google";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { ReactLenis } from "lenis/react";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

// Custom hook to detect if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // Adjust this value as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

export default function Home() {
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play();
      videoRef.current.onended = () => setVideoFinished(true);
    } else {
      setVideoFinished(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (videoFinished && mainContentRef.current) {
      const tl = gsap.timeline();
      tl.to(mainContentRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power4.inOut",
      })
        .fromTo(
          "#mainHeading",
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.6"
        )
        .fromTo(
          "#links",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "back.out(2)" },
          "-=0.8"
        )
        .fromTo(
          "#altVideo",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.inOut" },
          "-=0.4"
        );
    }
  }, [videoFinished]);

  return (
    <div className="relative">
      {!isMobile && !videoFinished && (
        <div className="fixed inset-0 z-50">
          <video
            ref={videoRef}
            className="w-full h-full object-cover filter grayscale"
            src="/intro2.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
          />
        </div>
      )}

      <div>
        <Navbar animationDelay={isMobile ? 0 : 3.5} />
        <ReactLenis root>
          <div
            ref={mainContentRef}
            className="flex min-h-screen flex-col items-center justify-center sm:pb-24 pb-8 px-4 text-black opacity-0"
          >
            {!isMobile && (
              <div
                id="altVideo"
                className="absolute inset-0 -z-10 opacity-0 hidden sm:block"
                style={{ top: "-0vh" }}
              >
                <video
                  className="w-full h-[102vh] mt-6 object-cover filter grayscale"
                  src="/altVideo7.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
            )}

            <div className="z-10 text-center sm:mt-0 mt-44 pointer-events-none select-none">
              <p
                id="mainHeading"
                className="font-[900] text-[2rem] sm:text-[4rem] max-w-3xl leading-[1.1] text-black"
              >
                ALTERNATIVE MUSIC VIA IRELAND.
              </p>
            </div>

            <div
              id="links"
              className="flex justify-center gap-8 sm:gap-12 mt-8 sm:mt-8 font-[500] sm:mr-6 "
            >
              <div className="flex-1 text-center">
                <a
                  href="/listen"
                  className="select-none hover:opacity-80 transition ease-in-out w-full sm:w-40  "
                >
                  <h1 className="bg-black text-white px-5 py-3 border-2 rounded-md whitespace-nowrap">
                    Latest Episode
                  </h1>
                </a>
              </div>
              <div className="flex-1 text-center pl-0">
                <a
                  href="/episodes"
                  className="select-none hover:opacity-80 transition ease-in-out w-full sm:w-40"
                >
                  <h1 className="bg-[#F2F2F2] text-[#797979] border-2 px-5 py-3 rounded-md whitespace-nowrap">
                    All Episodes
                  </h1>
                </a>
              </div>
            </div>

            {isMobile && (
              <div className="mt-16">
                <Image
                  src="/Mobile2.jpg"
                  alt="Mobile Hero Icons"
                  width={300}
                  height={400}
                  quality={100}
                  priority={true}
                />
              </div>
            )}
          </div>
        </ReactLenis>
      </div>
    </div>
  );
}
