"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Page: React.FC = () => {
  useEffect(() => {
    const ScrollTriggerSettings = {
      trigger: ".main",
      start: window.innerWidth < 768 ? "top 50%" : "top 40%", // Conditional start based on screen width
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];

    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];

    const yValues = [100, -150, -400];

    gsap.utils.toArray<Element>(".row").forEach((row, index) => {
      // Specified type for toArray
      const cardLeft = row.querySelector(".card-left") as HTMLElement;
      const cardRight = row.querySelector(".card-right") as HTMLElement;

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * leftRotationValues[index]
            }deg)`;

            cardRight.style.transform = `translateX(${
              progress * rightXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * rightRotationValues[index]
            }deg)`;
          },
        },
      });
    });

    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings,
    });

    gsap.to(".line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings,
    });

    gsap.to(".button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];

    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <Image
              src={`/img-${2 * i - 1}.jpg`}
              alt=""
              width={600}
              height={600}
              priority={true}
              quality={100}
            />
          </div>
          <div className="card card-right">
            <Image
              src={`/img-${2 * i}.jpg`}
              alt=""
              width={600}
              height={600}
              priority={true}
              quality={100}
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <div>
      <Navbar animationDelay={0} />
      <ReactLenis root>
        <section className="hero mt-44 px-4 sm:px-20 sm:text-2xl text-lg sm:text-center font-[500] ">
          <div className="flex-col space-y-12 max-w-3xl  justify-center items-center">
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

            <h1>
              Now, Mabfield returns with a renewed ambition and half a decade of
              top level experience to cut through the noise, celebrate the
              artists shaping culture and connect Ireland to the world.
            </h1>
          </div>
        </section>
        <section className="main sm:mt-44">
          <div className="main-content">
            <div className="logo">
              <Image
                src="/logo.png"
                alt=""
                width={100}
                height={100}
                priority={true}
                quality={100}
              />
            </div>

            <div className="copy ">
              <div className="line">
                <p>Alternative sounds via Ireland.</p>
              </div>
              <div className="line">
                <p>Alternative sounds via Ireland.</p>
              </div>
              <div className="line">
                <p>Alternative sounds via Ireland.</p>
              </div>
            </div>
          </div>
          {generateRows()}
        </section>
        <section className="footer"></section>
      </ReactLenis>
    </div>
  );
};

export default Page;
