import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <>
      <div className="mt-20">
        <div className="text-center">
          <Image
            alt=""
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-36 mx-auto mb-2"
          />
        </div>
        <div className="flex w-max items-center gap-2 mx-auto">
          <Image
            alt=""
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            className="w-6"
          />
          nanagyasi180@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center border-t border-gray-300 justify-between mx-[10%] mt-12 py-6">
        <p>© 2025 Nana Gyasi. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/stephen98/">
              {" "}
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.github.com/Stephen-sudo/">
              {" "}
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/nanagyasi99/">
              {" "}
              Instagram{" "}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
