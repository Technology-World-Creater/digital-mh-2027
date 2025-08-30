import React from "react";
import Image from "next/image";

const WhyTecMatters = () => {
  return (
    <section className="bg-[#FEFAF5] text-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-0">
        <h2 className="relative text-4xl font-bold mb-4">
          Why TEC Matters for{" "}
          <span className="text-green-500 z-50">
            Digital Maharashtra 2027 ?
          </span>
          <Image
            src={"/vector1.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="hidden lg:block absolute right-[13em] top-7 z-10 w-auto h-auto"
          />
        </h2>
        <p className="text-xl leading-relaxed mb-1 text-[#5C6C68]">
          Education is the engine of a digital economy, and Technology Education
          Creator (TEC) is building the foundation for Maharashtra&apos;s
          future. Here&apos;s what TEC will ensure:
        </p>
      </div>

      <div className=" bg-[#EFE9E2]">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-lg flex flex-col md:flex-row gap-8 pb-12 p-4 md:p-0 items-center justify-center">
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-6xl font-semibold font- text-gray-700 mb-2 relative">
              10
              <span className="text-2xl font-light absolute -top-4 -right-7">
                %
              </span>
            </div>
            <p className="text-gray-600 max-w-xs text-center">
              YoY growth in India&apos;s tech-driven education sector
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-6xl font-semibold text-stroke text-gray-700 mb-2 relative">
              1
              <span className="text-2xl font-light absolute -top-4 -right-7">
                ST
              </span>
            </div>
            <p className="text-gray-600 max-w-xs text-center">
              Global Education System designed with participation from 10
              countries
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-6xl font-semibold  text-gray-700 mb-2 relative">
              $10 T
            </div>
            <p className="text-gray-600 max-w-xs text-center">
              Projected economic impact from future-ready education by 2027
            </p>
          </div>
          <div>
            <Image
              src={"/startup.png"}
              width={0}
              height={0}
              sizes="100vw"
              alt="Startup illustration"
              className="h-80 w-full object-cover md:w-auto md:h-60 max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-0">
        <p className="text-xl font-semibold text-gray-800 leading-5 mb-8">
          And yet, nobody{" "}
          <span className="font-normal text-[#03CF65] italic">
            no one is building a future-ready education system for Bharat.
          </span>
        </p>
        <p className="text-lg font-semibold leading-relaxed mb-12">
          TEC is changing that by delivering:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-[#EFE9E2] p-6 shadow-md flex items-center justify-center">
            <div className="text-4xl font-light text-black mr-4 w-16 h-16 flex items-center justify-center">
              01
            </div>
            <p className="text-base font-semibold text-[#5C6C68]">
              Future-ready workforce for Maharashtra.
            </p>
          </div>
          <div className="bg-[#EFE9E2] p-6 shadow-md flex items-center justify-center">
            <div className="text-4xl font-light text-black mr-4 w-16 h-16 flex items-center justify-center">
              02
            </div>
            <p className="text-base font-semibold text-[#5C6C68]">
              Equal access to quality education through technology.
            </p>
          </div>
          <div className="bg-[#EFE9E2] p-6 shadow-md flex items-center justify-center">
            <div className="text-4xl font-light text-black mr-4 w-16 h-16 flex items-center justify-center">
              03
            </div>
            <p className="text-base font-semibold text-[#5C6C68]">
              Boost to India&apos;s global education rank, targeting Top 5 by
              2027.
            </p>
          </div>
        </div>

        <div className="relative mt-20 bg-[#B1FFD7] py-12 px-4 text-left mb-12 max-w-6xl">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
            <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 w-[80%] md:mb-0">
              Join the movement to transform Ed-Tech Sector. Be part of Digital
              Maharashtra 2027.
            </h2>
            <button className="flex absolute lg:-right-20 right-20 bottom-2 lg:bottom-2/5 text-lg leading-relaxed bg-green-500 hover:bg-green-600 text-white font-light py-3 px-8 rounded-lg items-center space-x-2">
              <span>APPLY NOW</span>
              <svg
                xmlns="http://www.w3.org/6000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTecMatters;
