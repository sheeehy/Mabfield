"use client";

import React, { useEffect, useRef } from "react";
import { FaXTwitter, FaYoutube, FaInstagram, FaSpotify, FaTiktok } from "react-icons/fa6";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
import gsap from "gsap";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.delay(3.2);

    // Animate the logo
    if (logoRef.current) {
      tl.fromTo(logoRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" });
    }

    // Animate the social icons from right to left and navigation links simultaneously
    if (socialsRef.current && linksRef.current) {
      tl.fromTo(
        socialsRef.current.children,
        { opacity: 0, x: 50 }, // Animate from right to left (x: 50 to x: 0)
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power1.out" },
        "-=0.5" // Overlap with the logo animation, or start at the same time if the timing is right
      );

      const links = Array.from(linksRef.current.querySelectorAll("a")).reverse(); // Reverse the order of links

      tl.fromTo(
        links,
        { opacity: 0, x: -50 }, // Links animate from left to right (x: -50 to x: 0)
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.2, ease: "power1.out" },
        "<" // Sync start time exactly with the social icons animation
      );
    }
  }, []);

  return (
    <nav className="lg:block hidden pb-2 bg-transparent mt-2 mx-12">
      <div className="text-zinc-400 text-sm font-[500]">
        <div className="flex justify-between items-center px-8 pt-6 bg-transparent">
          {/* Left: Social Media Icons */}
          <div ref={socialsRef} className="flex-shrink-0 flex justify-center items-center gap-5 text-lg">
            <a href="https://www.youtube.com/c/Mabfield" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/mabfield/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://x.com/mabfield_" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://open.spotify.com/user/mabfield" target="_blank">
              <FaSpotify />
            </a>
            <a href="https://www.tiktok.com/@mabfield" target="_blank">
              <FaTiktok />
            </a>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a ref={logoRef} href="/" className={`${mavenPro.className} font-[900] text-black text-xl `}>
              <Image
                src="/mabfieldWordmark.png"
                alt="Mabfield Logo"
                className="hover:opacity-70 transition ease-in-out hover:scale-105 mb-2"
                width={200}
                height={200}
                quality={100}
                priority={true}
              />
            </a>
          </div>

          {/* Right: Navigation Links */}
          <div ref={linksRef} className="flex-shrink-0">
            <div className="flex justify-center items-center gap-12">
              <a href="/listen">LISTEN</a>
              <a href="/episodes">EPISODES</a>
              <a href="/about">ABOUT</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
