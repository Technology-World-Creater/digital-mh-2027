import React from "react";
import Image from "next/image";
import ApplyNow from "@/components/common/ApplyNow";

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
            alt="Line"
            width={240}
            height={500}
            className={`-z-0 hidden lg:block absolute top-7 right-[13em]`}
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
        <ApplyNow title={"Ed"} />
      </div>
    </section>
  );
};

export default WhyTecMatters;
