import React from "react";

const ApplyNow = ({ title }: { title: string }) => {
  return (
    <div className="relative mt-20 bg-[#B1FFD7] py-12 px-4 text-left mb-12 max-w-6xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 w-[80%] md:mb-0">
          Join the movement to transform {title}-Tech Sector. Be part of Digital
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
  );
};

export default ApplyNow;
