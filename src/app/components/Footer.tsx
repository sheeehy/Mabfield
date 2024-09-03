import { Maven_Pro } from "next/font/google";
import Link from "next/link";
import { FaXTwitter, FaYoutube, FaInstagram, FaSpotify, FaTiktok } from "react-icons/fa6";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-transparent text-[#797979] w-full">
      <div className="container mx-auto px-20 py-10">
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
              <a href="#" className="hover:opacity-75 transition ease-in-out" aria-label="X">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="hover:opacity-75 transition ease-in-out" aria-label="Youtube">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="hover:opacity-75 transition ease-in-out" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:opacity-75 transition ease-in-out" aria-label="Spotify">
                <FaSpotify size={24} />
              </a>
              <a href="#" className="hover:opacity-75 transition ease-in-out" aria-label="TikTok">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="mb-4">Stay updated with our latest episodes and news.</p>
            <form className="flex w-full">
              <input type="email" placeholder="Enter your email" className="flex-grow bg-[#F2F2F2] text-[#797979] px-4 py-2 rounded-l-md focus:outline-none" required />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-r-md hover:opacity-75  transition ease-in-out">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MABFIELD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
