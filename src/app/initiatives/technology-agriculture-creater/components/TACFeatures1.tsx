import Image from "next/image";
import React from "react";

const TACFeatures1 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-[1358px] mx-auto lg:px-10 ">
        <div className="flex lg:w-[412px] md:w-[100px]">
          <Image
            src="/TACFeatures1Image.png"
            width={412}
            height={412}
            className="object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col bg-[#EFE9E2] px-4 gap-4 py-2">
          <div className="flex flex-col">
            <div className="flex text-[#1E3636] text-3xl font-medium font-['Manrope'] leading-loose">
              01
            </div>
            <div className="flex flex-row  gap-2 ">
              <div className="flex text-neutral-500 lg:text-3xl text-2xl font-semibold font-['Manrope'] leading-10">
                Agriculture =
              </div>
              <div className="flex text-[#2D814A] text-2xl font-medium font-['Inter'] leading-[42.71px]">
                Bharat’s Backbone
              </div>
            </div>
          </div>
          <div className="flex text-[#5C6C68] text-lg font-bold font-['Manrope'] leading-relaxed w-fit px-2">
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
            <div className="flex text-[#1E3636] lg:text-3xl text-2xl font-medium font-['Manrope'] leading-loose">
              02
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex text-neutral-500 lg:text-3xl text-xl font-semibold font-['Manrope'] leading-10">
                Bridging the
              </div>
              <div className="flex text-[#2D814A] lg:text-3xl text-xl font-medium font-['Inter'] leading-[42.71px]">
                Rural-Urban Digital Divide
              </div>
            </div>
            <div className="flex text-[#5C6C68] text-lg font-bold font-['Manrope'] leading-relaxed w-fit px-2">
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
