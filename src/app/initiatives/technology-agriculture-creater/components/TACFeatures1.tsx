import Image from "next/image";
import React from "react";

const TACFeatures1 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="flex w-full md:w-1/2">
          <Image
            src="/TACFeatures1Image.png"
            width={412}
            height={412}
            className="object-cover w-full h-auto"
            alt=""
          />
        </div>
        <div className="flex flex-col bg-[#EFE9E2] px-4 gap-2 py-10">
          <div className="flex flex-col">
            <div className="flex text-[#1E3636] text-3xl font-medium leading-loose mb-2">
              01
            </div>
            <div className="">
              <div className="text-neutral-500 text-3xl font-semibold leading-10">
                Agriculture ={" "}
                <span className="text-[#2D814A] italic text-3xl">
                  Bharat’s Backbone
                </span>
              </div>
            </div>
          </div>
          <div className="flex text-[#5C6C68] text-lg leading-relaxed w-fit px-2 pl-10">
            <ul className="list-disc">
              <li>
                Over 55% of Maharashtra’s population depends on farming for
                livelihood.
              </li>
              <li>
                Agriculture contributes significantly to the state economy,
                making its digital transformation crucial for overall growth.
              </li>
            </ul>
          </div>
          <div className="flex  flex-col ">
            <div className="flex text-[#1E3636] lg:text-3xl text-2xl font-medium leading-loose">
              02
            </div>
            <div className="">
              <div className="text-neutral-500 text-3xl font-semibold leading-10 mb-2">
                Bridging the{" "}
                <span className="text-[#2D814A] italic text-3xl ">
                  Rural-Urban Digital Divide
                </span>
              </div>
            </div>
            <div className="flex text-[#5C6C68] text-lg  leading-relaxed w-fit px-2 pl-10">
              <ul className="list-disc">
                <li>
                  Most farmers lack access to technology, finance, and markets.
                </li>
                <li>
                  TAC ensures digital inclusion, bringing rural Maharashtra into
                  the Digital India framework.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TACFeatures1;
