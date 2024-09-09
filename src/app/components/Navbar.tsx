import React, { useEffect, useRef, useState } from "react";
import { FaXTwitter, FaYoutube, FaInstagram, FaSpotify, FaTiktok, FaDiscord } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
import gsap from "gsap";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

interface NavbarProps {
  animationDelay?: number;
}

const Navbar: React.FC<NavbarProps> = ({ animationDelay = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  const menuIconAnimation = useSpring({
    opacity: isMenuOpen ? 0 : 1,
    transform: `scale(${isMenuOpen ? 0.5 : 1})`,
    config: { mass: 1, tension: 300, friction: 20 },
  });

  const closeIconAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: `scale(${isMenuOpen ? 1 : 0.5})`,
    config: { mass: 1, tension: 300, friction: 20 },
  });

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.delay(animationDelay);

    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
      );
    }

    if (socialsRef.current && linksRef.current) {
      const socialIcons = socialsRef.current.children;
      const navLinks = linksRef.current.querySelectorAll("a");

      const animateLinks = (links: Element[] | NodeListOf<Element>) => {
        tl.fromTo(
          links,
          { opacity: 0, y: 0 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.05, 
            ease: "back.out(1.7)"
          },
          "-=0.4"
        );
      };

      animateLinks(Array.from(socialIcons));
      animateLinks(Array.from(navLinks));
    }
  }, [animationDelay]);

  useEffect(() => {
    if (menuRef.current && menuItemsRef.current) {
      const menu = menuRef.current;
      const menuItems = menuItemsRef.current.children;

      if (isMenuOpen) {
        gsap.to(menu, { x: "0%", duration: 0.5, ease: "power3.out" });
        gsap.fromTo(menuItems, 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out", delay: 0.2 }
        );
      } else {
        gsap.to(menu, { x: "100%", duration: 0.5, ease: "power3.in" });
        gsap.to(menuItems, { y: 20, opacity: 0, duration: 0.3, stagger: 0.05, ease: "power3.in" });
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent mt-2 mx-4 lg:mx-12 select-none">
      <div className="text-[#797979] text-sm font-[500]">
        <div className="flex justify-between items-center px-4 lg:px-8 pt-6 bg-transparent">
          {/* Left: Social Media Icons (hidden on mobile) */}
          <div ref={socialsRef} className="hidden lg:flex flex-shrink-0 justify-center items-center gap-5 text-lg">
            <div className="hover:opacity-70 transition ease-in-out">
            <a href="https://www.youtube.com/c/Mabfield" target="_blank" className="hover:opacity-70 transition ease-in-out social-link "><FaYoutube /></a>
            </div>
            <div className="hover:opacity-70 transition ease-in-out">
            <a href="https://www.instagram.com/mabfield/" target="_blank" className="social-link "><FaInstagram /></a>
            </div>
            <div className="hover:opacity-70 transition ease-in-out">
            <a href="https://x.com/mabfield_" target="_blank" className="social-link "><FaXTwitter /></a>
            </div>
            <div className="hover:opacity-70 transition ease-in-out">
            <a href="https://open.spotify.com/user/mabfield" target="_blank" className="social-link "><FaSpotify /></a>
            </div>
            <div className="hover:opacity-70 transition ease-in-out">
            <a href="https://www.tiktok.com/@mabfield" target="_blank" className="social-link "><FaTiktok /></a>
            </div>
            <div className="hover:opacity-70 transition ease-in-out">
            <a href="/" target="_blank" className="social-link "><FaDiscord /></a>
</div>

          </div>

          {/* Center: Logo */}
          <div className="lg:absolute z-50 lg:left-1/2 lg:transform lg:-translate-x-1/2 hover:opacity-70 transition ease-in-out hover:scale-105 ">
            <a ref={logoRef} href="/" className={`${mavenPro.className} font-[900] text-black text-xl`}>
              <Image
                src="/mabfieldWordmark.png"
                alt="Mabfield Logo"
                className="opacity-0"
                width={150}
                height={150}
                quality={100}
                priority={true}
                ref={imageRef}
              />
            </a>
          </div>

          {/* Right: Navigation Links (hidden on mobile) */}
          <div ref={linksRef} className="hidden lg:block flex-shrink-0 text-[#797979] font-[700]">
            <div className="flex justify-center items-center gap-12">
              <div className="hover:opacity-75 transition ease-in-out ">
              <a href="/listen" className=" ">LISTEN</a>
              </div>
              <div className="hover:opacity-75 transition ease-in-out ">

              <a href="/episodes" className=" ">EPISODES</a>
              </div>
              <div className="hover:opacity-75 transition ease-in-out ">

              <a href="/about" className=" ">ABOUT</a>
              </div>
            </div>
          </div>

          {/* Burger Menu (visible only on mobile) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-[#797979] text-2xl z-50 relative w-8 h-8">
              <animated.div style={menuIconAnimation} className="absolute inset-0 flex items-center justify-center">
                <FaBars />
              </animated.div>
              <animated.div style={closeIconAnimation} className="absolute inset-0 flex items-center justify-center">
                <FaTimes />
              </animated.div>
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <div 
        ref={menuRef} 
        className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col justify-center transform translate-x-full"
      >
        <div ref={menuItemsRef} className="flex flex-col items-start gap-8 text-[#797979] font-[700] mb-12 px-8">
          <a href="/listen" className="text-3xl" onClick={toggleMenu}>LISTEN</a>
          <a href="/episodes" className="text-3xl" onClick={toggleMenu}>EPISODES</a>
          <a href="/about" className="text-3xl" onClick={toggleMenu}>ABOUT</a>
          <div className="flex justify-start items-center gap-8 text-3xl mt-8">
            <a href="https://www.youtube.com/c/Mabfield" target="_blank" className="social-link"><FaYoutube /></a>
            <a href="https://www.instagram.com/mabfield/" target="_blank" className="social-link"><FaInstagram /></a>
            <a href="https://x.com/mabfield_" target="_blank" className="social-link"><FaXTwitter /></a>
            <a href="https://open.spotify.com/user/mabfield" target="_blank" className="social-link"><FaSpotify /></a>
            <a href="https://www.tiktok.com/@mabfield" target="_blank" className="social-link"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;