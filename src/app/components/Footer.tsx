import { Maven_Pro } from "next/font/google";
import Link from "next/link";
import { FaXTwitter, FaYoutube, FaInstagram, FaSpotify, FaTiktok, FaDiscord } from "react-icons/fa6";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-transparent text-[#797979] w-full">
      


      <div className="container mx-auto sm:px-20 px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <div className={`${mavenPro.className} font-[900]  `}>
              <h2 className=" text-2xl  text-black mb-4">MABFIELD</h2>
            </div>
            <nav className="space-y-2">
              <Link href="/episodes" className="block hover:opacity-75 transition ease-in-out">
                EPISODES
              </Link>
              <Link href="/listen" className="block hover:opacity-75 transition ease-in-out">
                LISTEN
              </Link>
              <Link href="/about" className="block hover:opacity-75 transition ease-in-out">
                ABOUT
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-start justify-center mb-8 md:mb-0">
            <div className="flex space-x-4">
            <a href="https://www.youtube.com/c/Mabfield" className="hover:opacity-75 transition ease-in-out" aria-label="Youtube">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.instagram.com/mabfield/" className="hover:opacity-75 transition ease-in-out" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://x.com/mabfield_" className="hover:opacity-75 transition ease-in-out" aria-label="X">
                <FaXTwitter size={24} />
              </a>
              <a href="https://open.spotify.com/user/mabfield" className="hover:opacity-75 transition ease-in-out" aria-label="Spotify">
                <FaSpotify size={24} />
              </a>
              <a href="https://www.tiktok.com/@mabfield" className="hover:opacity-75 transition ease-in-out" aria-label="TikTok">
                <FaTiktok size={24} />
              </a>
              <a href="/" className="hover:opacity-75 transition ease-in-out" aria-label="TikTok">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="mt-10 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MABFIELD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
