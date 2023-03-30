import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <style>
        {`
          .bgimg1 {
            background-image: url("/bush1.avif");
          }
        `}
      </style>
      <section className="text-gray-400  body-font relative">
        <div className="bgimg1 h-52 bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center">
          <div>
            <picture>
              <img src="/plant1.avif" alt="" className="w-28 rounded-full " />
            </picture>
          </div>
          <span
            className="text-white text-xl font-semibold md:text-7xl font-serif "
            data-aos="zoom-in-down"     
            data-aos-duration="2000"

          >
            
            Want to know more ?
          </span>
        </div>

        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-green-600">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed lowercase text-base">
              WRITE TO US AND WE SHALL GET BACK TO YOU
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
