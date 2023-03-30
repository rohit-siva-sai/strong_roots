import React from "react";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { BsTelephoneFill,BsFacebook,BsYoutube,BsInstagram,BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-400 hidden md:block bg-gray-900 body-font  mt-6 ">
        <div
          className="container px-36  py-6  mx-auto flex md:items-center
        justify-evenly lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
        >
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="flex flex-row items-center space-x-2 ">
              <div>
                <picture>
                  <img
                    src="/plant1.avif"
                    alt=""
                    className="w-36 rounded-full "
                  />
                </picture>
              </div>
            <div>
              <Link href={"./"} ><a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <span className="ml-2  text-xl">Strong Roots</span>
              </a></Link>
              <p className="mt-2 ml-2 text-sm text-gray-500">
                Native Greens Grow Together
              </p>
            </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col space-y-4  flex-wrap md:pl-20  md:mt-0  md:text-left text-center">
            <div className="flex flex-col  ">
              <span className="flex items-center space-x-2 ">
                <HiLocationMarker className="text-green-600 text-2xl " />
                <span className="text-sm">Gayatri Vidya parisadh college</span>
              </span>
              <span className="indent-8 text-sm">Rushikonda,vizag</span>
              <span className="indent-8 text-sm">ANdhra Pradesh</span>
            </div>
            <div className="flex flex-row space-x-4  ">
              <BsTelephoneFill className="text-xl text-green-600" />
              <span className="text-sm ">+91  0891-2995084</span>
            </div>
            <div className="flex flex-row space-x-4  ">
              <HiMail className="text-xl text-green-600" />
              <span className="text-sm ">pranayvenkatasai@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col items-baseline pl-10 w-[650px] space-y-2  justify-start">
            <span className="text-white text-lg font-bold ">Our Mission</span>
            <span className="text-gray-400 text-sm px-4">
              To make citizens aware about the need of trees for our survival
              and protect natural resources for generations to come
            </span>
            <span className="text-white text-lg font-bold ">Our Vision</span>
            <span className="text-gray-400 text-sm px-4">
              To create forests and save water bodies for generations to come.
            </span>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2023 Strong Roots —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-500 ml-1"
                target="_blank"
              >
                @Foundation
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-1 space-x-6 justify-center items-center sm:justify-start">
              <a className="text-gray-400" href="https://www.facebook.com/gvpcdpgca"><BsFacebook  className="text-lg text-green-600"/></a>
              <a className="ml-3 text-gray-400" href="https://twitter.com/gvpcdpgc"><BsYoutube className="text-lg text-green-600"/></a>
              <a className="ml-3 text-gray-400" href="https://www.instagram.com/gvpcdpgca/?hl=en"><BsInstagram className="text-lg text-green-600"/></a>
              <a className="ml-3 text-gray-400" href="https://www.youtube.com/channel/UCpdY3Ro6iV_X-oO6ld3Mwdw"><BsTwitter className="text-lg text-green-600"/></a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
