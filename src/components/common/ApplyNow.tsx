import React from "react";

const ApplyNow = ({ title }: { title: string }) => {
  return (
    <div className="max-w-7xl mx-auto overflow-hidden">
      <div className="relative mt-20 bg-[#B1FFD7] py-12 px-4 text-left mb-12 max-w-6xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 w-[80%] md:mb-0">
            Join the movement to transform {title}-Tech Sector. Be part of
            Digital Maharashtra 2027.
          </h2>
          <button className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 text-white text-base sm:text-lg lg:text-xl font-medium font-['Inter'] bg-[#03CF65] rounded-lg sm:static sm:ml-auto lg:absolute lg:-right-24 lg:top-1/2 lg:-translate-y-1/2 cursor-pointer">
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
  );
};

export default ApplyNow;
