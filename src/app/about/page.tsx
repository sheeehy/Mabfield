"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import AboutAnimation from "../components/AboutAnimation";
import ScaleLoader from "react-spinners/ScaleLoader";

interface AboutBlock {
  _key: string;
  children: Array<{ text: string }>;
}

interface AboutData {
  text: AboutBlock[];
}

const Page: React.FC = () => {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/AboutData"); // Fetching About Data
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result[0]); // Assuming result is an array, and we want the first object
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar animationDelay={0} disableAnimation={true} />
      <ReactLenis root>
        <section className="mb-32 mt-44 px-4 sm:px-20 sm:text-2xl text-lg sm:text-center font-[500] pointer-events-none">
          <div className="flex-col space-y-12 max-w-3xl justify-center items-center cursor-default">
            {data ? (
              data.text.map((block) => (
                <div key={block._key}>
                  {block.children.map((child, index) => (
                    <p key={index}>{child.text}</p>
                  ))}
                </div>
              ))
            ) : (
              <p></p>
            )}
            <div className="flex justify-center items-center">
              <Image
                src={`/img-7.jpg`}
                alt="About image"
                width={300}
                height={300}
                priority={true}
                quality={100}
                className="mt-12 sm:mt-32 sm:w-2/3 w-full"
              />
            </div>
          </div>
        </section>
      </ReactLenis>
    </div>
  );
};

export default Page;
