import { Maven_Pro } from "next/font/google";
import Link from "next/link";
import { FaXTwitter, FaYoutube, FaInstagram, FaSpotify, FaTiktok, FaDiscord } from "react-icons/fa6";

import Image from "next/image";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-transparent text-[#797979] w-full px-4 sm:px-24">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start mb-8 w-full">
          <div className={`${mavenPro.className} font-[900]  `}>
            <h2 className=" text-2xl  text-black mb-4 ">
              {" "}
              <Image src="/wordmark.png" alt="Logo" width={120} height={120} quality={100} />
            </h2>
          </div>
          <nav className="space-y-2">
            <a href="/episodes" className="block hover:opacity-75 transition ease-in-out cursor-pointer">
              EPISODES
            </a>
            <a href="/listen" className="block hover:opacity-75 transition ease-in-out">
              LISTEN
            </a>
            <a href="/about" className="block hover:opacity-75 transition ease-in-out">
              ABOUT
            </a>
          </nav>
        </div>
        <div className="flex space-x-4 justify-end w-full mb-8 items-start">
          <a href="https://www.youtube.com/c/Mabfield" className="hover:opacity-75 transition ease-in-out" target="_blank" aria-label="Youtube">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.instagram.com/mabfield/" className="hover:opacity-75 transition ease-in-out" target="_blank" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://x.com/mabfield_" className="hover:opacity-75 transition ease-in-out" target="_blank" aria-label="X">
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://open.spotify.com/show/7Dwtks2wLibEbLivC01ulf?si=e8a678bee2954359"
            className="hover:opacity-75 transition ease-in-out"
            target="_blank"
            aria-label="Spotify"
          >
            <FaSpotify size={24} />
          </a>
          <a href="https://www.tiktok.com/@mabfield" className="hover:opacity-75 transition ease-in-out" target="_blank" aria-label="TikTok">
            <FaTiktok size={24} />
          </a>
          <a href="https://discord.gg/xDgHfJCwKA" className="hover:opacity-75 transition ease-in-out" target="_blank" aria-label="TikTok">
            <FaDiscord size={24} />
          </a>
        </div>
      </div>

      <div className="mb-12  mt-4 text-center">
        <p>&copy; {new Date().getFullYear()}MABFIELD </p>
      </div>
    </footer>
  );
}
