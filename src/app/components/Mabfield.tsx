import React from "react";
import { Maven_Pro } from "next/font/google";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

const Mabfield: React.FC = () => {
  return (
    <div>
      {
        <div className={`${mavenPro.className} `}>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center  ">
              <div className="flex justify-center items-center     filter grayscale rotate-0">
                <p className="absolute   font-[900] sm:text-[8.5rem]  text-[2rem] leading-[1.1] text-black scale-x-[1.65] scale-y-[1.1] custom-subtle-shadow mt-[2.4rem] ml-[2.4rem]">
                  MABFIELD
                </p>{" "}
                <p className="absolute   font-[900] sm:text-[8.5rem] text-[2rem] leading-[1.1] text-black scale-x-[1.65] scale-y-[1.1] custom-subtle-shadow mt-[2rem] ml-[2rem]">
                  MABFIELD
                </p>{" "}
                <p className="absolute   font-[900] sm:text-[8.5rem] text-[2rem] leading-[1.1] text-black scale-x-[1.65] scale-y-[1.1] custom-subtle-shadow mt-[1.6rem] ml-[1.6rem]">
                  MABFIELD
                </p>{" "}
                <p className="absolute   font-[900] sm:text-[8.5rem] text-[2rem] leading-[1.1] text-black scale-x-[1.65] scale-y-[1.1] custom-subtle-shadow mt-[1.2rem] ml-[1.2rem]">
                  MABFIELD
                </p>{" "}
                <p className="absolute   font-[900] sm:text-[8.5rem] text-[2rem] leading-[1.1] text-black scale-x-[1.65] scale-y-[1.1] custom-subtle-shadow mt-[0.8rem] ml-[0.8rem]">
                  MABFIELD
                </p>{" "}
                <p className="absolute  font-[900] sm:text-[8.5rem] text-[2rem] leading-[1.1] text-black scale-x-[1.65] scale-y-[1.1] custom-subtle-shadow mt-[0.4rem] ml-[0.4rem]">
                  MABFIELD
                </p>{" "}
                <p className="absolute font-[900] sm:text-[8.5rem] text-[2rem] leading-[1.1] text-white mt-[0rem] ml-[0rem] scale-x-[1.65] scale-y-[1.1] text-outline">MABFIELD</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Mabfield;
