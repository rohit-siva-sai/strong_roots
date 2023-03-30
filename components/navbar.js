import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-50 shadow shadow-green-500 ">
      <header className="text-white bg-gray-900 z-50 body-font">
        <div className="container mx-auto flex flex-wrap p-2 px-6 flex-col md:flex-row items-center">
          <div className="flex flex-row items-center ">
            <div>
              <picture>
                <img src="/plant1.avif" alt="" className="w-12 rounded-full" />
              </picture>
            </div>
            <Link href={"/"}><a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <span className="ml-3 font-bold text-2xl ">Strong Roots</span>
            </a></Link>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link href="./">
              <a className="mr-8 hover:text-green-300">Home</a>
            </Link>
            <Link href="/plant">
              <a className="mr-8 hover:text-green-300">projects</a>
            </Link>
            <Link href="/blog">
              <a className="mr-8 hover:text-green-300">Blogs</a>
            </Link>
            <Link href="/about">
              <a className="mr-8 hover:text-green-300">About us</a>
            </Link>
            <Link href="/contact">
              <a className="mr-8 hover:text-green-300">Contact</a>
            </Link>
          </nav>
          <Link href={"/model"} ><a className="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 mr-2 md:mt-0">
            explore 
          </a></Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
