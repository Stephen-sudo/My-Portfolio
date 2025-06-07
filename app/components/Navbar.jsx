import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import sunIcon from "@/assets/sun_icon.png";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  //handle scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full  fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-40 cursor-pointer mr-14 "
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full ${isScroll ? "" : "shadow-sm bg-white bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}
        >
          <li className="font-Ovo">
            <a href="#top">Home</a>
          </li>
          <li className="font-Ovo">
            <a href="#about">About me</a>
          </li>
          <li className="font-Ovo">
            <a href="#services">Services</a>
          </li>
          <li className="font-Ovo">
            <a href="#work">My work</a>
          </li>
          <li className="font-Ovo">
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="items-center flex gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? sunIcon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>

          <button className="block ml-3 md:hidden">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
              onClick={openMenu}
            />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className=" flex md:hidden flex-col gap-4 bg-rose-200 fixed -right-64 px-10 py-20 z-50 h-screen w-64 transition duration-500  top-0 bottom-0 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li className="font-Ovo" onClick={closeMenu}>
            <a href="#top">Home</a>
          </li>
          <li className="font-Ovo" onClick={closeMenu}>
            <a href="#about">About me</a>
          </li>
          <li className="font-Ovo" onClick={closeMenu}>
            <a href="#services">Services</a>
          </li>
          <li className="font-Ovo" onClick={closeMenu}>
            <a href="#work">My work</a>
          </li>
          <li className="font-Ovo" onClick={closeMenu}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
