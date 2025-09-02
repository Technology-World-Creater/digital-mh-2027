import React from "react";
import Image from "next/image";

const TACFeatures2 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="flex w-full md:w-1/2">
          <Image
            src="/TACFeatures2Image.png"
            width={412}
            height={412}
            className="object-cover w-full h-auto"
            alt=""
          />
        </div>
        <div className="flex flex-col bg-[#EFE9E2] px-4 py-10">
          <div className="flex flex-col">
            <div className="text-[#1E3636] text-3xl font-medium leading-loose">
              03
            </div>
            <div className="">
              <div className=" text-neutral-500 text-3xl font-semibold leading-10 mb-2">
                Solving{" "}
                <span className="text-[#2D814A] italic text-3xl">
                  Farmer Distress
                </span>
              </div>
            </div>
          </div>
          <div className="flex text-[#5C6C68] text-lg leading-relaxed w-fit px-2 pl-10">
            <ul className="list-disc">
              <li>
                Tackles price exploitation, crop wastage, and lack of credit
                through digital marketplaces, AI advisory, and financial
                services.
              </li>
              <li>
                Reduces farmer dependency on middlemen → direct income boost.
              </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <div className="flex text-[#1E3636] lg:text-3xl text-2xl font-medium leading-loose">
              04
            </div>
            <div className="">
              <div className=" text-neutral-500 text-3xl font-semibold leading-10 mb-2">
                Empowering{" "}
                <span className="text-[#2D814A] italic text-3xl">
                  Rural Youth
                </span>
              </div>
            </div>
            <div className="flex text-[#5C6C68] text-lg leading-relaxed w-fit px-2 pl-10">
              <ul className="list-disc">
                <li>
                  Creates employment opportunities through AgriTech skill
                  programs.
                </li>
                <li>
                  Encourages tech-driven entrepreneurship in rural Maharashtra.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TACFeatures2;
