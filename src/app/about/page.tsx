"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import AboutAnimation from "../components/AboutAnimation";

gsap.registerPlugin(ScrollTrigger);

const Page: React.FC = () => {
  return (
    <div>
      <Navbar animationDelay={0} disableAnimation={true} />
      <ReactLenis root>
        <section className="mb-32 mt-44 px-4 sm:px-20 sm:text-2xl text-lg sm:text-center font-[500]  pointer-events-none ">
          <div className="flex-col space-y-12 max-w-3xl  justify-center items-center cursor-default ">
            <h1 className="">
              Founded in 2018 by Jack Rapanakis and Dylan Murphy, Belfast based
              music platform Mabfield was created with a mission to showcase
              emerging artists in Ireland and beyond and fill a void for quality
              grassroots content.
            </h1>

            <h1>
              Progressing from playlist curation into a weekly podcast about
              alternative music and hip hop in Ireland, the pair have
              interviewed artists like Jordan Adetunji, Biig Piig and hosted a
              sold out live podcast in Belfast.{" "}
            </h1>

            <h1>
              Throughout the podcast episodes they hosted freestyles and
              collaborated with the BBC to create the three part radio series
              &apos;The Evolution of Irish Hip Hop&apos;. The platform took a
              brief hiatus while Dylan served as Head of Content at District
              Magazine for 5 years.{" "}
            </h1>

            <h1 className="block lg:hidden">
              Now, Mabfield returns with a renewed ambition and half a decade of
              top level experience to cut through the noise, celebrate the
              artists shaping culture and connect Ireland to the world.
            </h1>
            <div className="block lg:hidden">
              <Image
                src={`/img-7.jpg`}
                alt=""
                width={600}
                height={600}
                priority={true}
                quality={100}
                className="mt-12"
              />
            </div>
          </div>
        </section>
        <div className="hidden lg:block">
          <AboutAnimation />
        </div>{" "}
      </ReactLenis>
    </div>
  );
};

export default Page;
