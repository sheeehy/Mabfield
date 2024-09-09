"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const Page: React.FC = () => {
  useEffect(() => {
    const ScrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
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
            <img src={`/img-${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className="card card-right">
            <img src={`/img-${2 * i}.jpg`} alt="" />
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
        <section className="hero"></section>
        <section className="main">
          <div className="main-content">
            <div className="logo">
              <img src="logo.png" alt="" />
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

            <div className="btn">
              <button>Latest Episodes</button>
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
