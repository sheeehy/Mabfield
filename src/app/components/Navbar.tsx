import React from "react";
import Mabfield from "./Mabfield";
import { FaXTwitter, FaYoutube, FaInstagram, FaSpotify, FaSoundcloud } from "react-icons/fa6";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  return (
    <nav className=" lg:block hidden ">
      <div className="text-zinc-400 text-sm font-[500]">
        <div className="flex justify-between items-center px-8 pt-6 bg-transparent">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/" className={`${mavenPro.className} font-[900] text-black text-xl  `}>
              MABFIELD
              {/*   <Image src={"/MabfieldLogo.PNG"} alt="Mabfield Logo" width={150} height={200} quality={100} priority={true} />{" "} */}
            </a>
          </div>

          {/* Center: Navigation Links */}
          <div className="absolute  left-1/2 transform -translate-x-1/2">
            <div className="flex justify-center items-center gap-12">
              <a href="/listen" className=" ">
                LISTEN
              </a>
              <a href="/episodes" className="">
                EPISODES
              </a>

              <a href="/about" className=" ">
                ABOUT
              </a>
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex-shrink-0 flex justify-center items-center gap-5 text-lg">
            <a href="/youtube" className=" ">
              <FaYoutube />
            </a>
            <a href="/instagram" className=" ">
              <FaInstagram />
            </a>
            <a href="/twitter" className=" ">
              <FaXTwitter />
            </a>
            <a href="/spotify" className=" ">
              <FaSpotify />
            </a>
            <a href="/soundcloud" className=" ">
              <FaSoundcloud />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
