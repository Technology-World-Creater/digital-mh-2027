import React from "react";
import Image from "next/image";

const TACFeatures2 = () => {
  return (
    <>
      <div className="flex flex-row w-[1358px]">
        <div className="flex w-[430px]">
          <Image
            src="/TACFeatures2Image.png"
            width={412}
            height={412}
            className="object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col bg-[#EFE9E2] px-4 gap-4">
          <div className="flex flex-col">
            <div className="flex text-[#1E3636] text-3xl font-medium font-['Manrope'] leading-loose">
              03
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex text-neutral-500 text-3xl font-semibold font-['Manrope'] leading-10">
                Solving
              </div>
              <div className="flex text-[#2D814A] text-2xl font-medium font-['Inter'] leading-[42.71px]">
                Farmer Distress
              </div>
            </div>
            <div className="flex text-[#5C6C68] text-lg font-bold font-['Manrope'] leading-relaxed w-fit px-2">
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
          </div>
          <div className="flex flex-col ">
            <div className="flex text-[#1E3636] text-3xl font-medium font-['Manrope'] leading-loose">
              04
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex text-neutral-500 text-3xl font-semibold font-['Manrope'] leading-10">
                Empowering
              </div>
              <div className="flex text-[#2D814A] text-2xl font-medium font-['Inter'] leading-[42.71px]">
                Rural Youth
              </div>
            </div>
            <div className="flex text-[#5C6C68] text-lg font-bold font-['Manrope'] leading-relaxed w-fit px-2">
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
