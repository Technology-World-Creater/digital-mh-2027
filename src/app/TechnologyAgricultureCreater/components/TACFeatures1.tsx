import Image from "next/image";
import React from "react";

const TACFeatures1 = () => {
  return (
    <>
      {/* <div className="flex flex-row w-[1358px]">
        <div className="flex w-[412px]">
          <Image
            src="/TACFeatures1Image.png"
            width={412}
            height={412}
            className="object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col bg-[#EFE9E2] px-4 gap-4">
          <div className="flex flex-col">
            <div className="flex text-[#1E3636] text-3xl font-medium font-['Manrope'] leading-loose">
              01
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex text-neutral-500 text-3xl font-semibold font-['Manrope'] leading-10">
                Agriculture =
              </div>
              <div className="flex text-[#2D814A] text-2xl font-medium font-['Inter'] leading-[42.71px]">
                Bharat’s Backbone
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
          </div>
          <div className="flex flex-col ">
            <div className="flex text-[#1E3636] text-3xl font-medium font-['Manrope'] leading-loose">
              02
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex text-neutral-500 text-3xl font-semibold font-['Manrope'] leading-10">
                Bridging the
              </div>
              <div className="flex text-[#2D814A] text-2xl font-medium font-['Inter'] leading-[42.71px]">
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
      </div> */}
      <span></span>

      {/* <div className="flex flex-col w-full max-w-[1358px] mx-auto space-y-8 px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row bg-[#EFE9E2] rounded-xl overflow-hidden">
         
          <div className="w-full lg:w-[412px]">
            <Image
              src="/TACFeatures1Image.png"
              width={412}
              height={412}
              className="object-cover w-full h-auto"
              alt="TAC Feature 1"
            />
          </div>

        
          <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-4 gap-2 flex-1">
            <div className="text-[#1E3636] text-2xl sm:text-3xl font-medium font-['Manrope'] leading-loose">
              01
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="text-neutral-500 text-2xl sm:text-3xl font-semibold font-['Manrope'] leading-9 sm:leading-10">
                Agriculture =
              </div>
              <div className="text-[#2D814A] text-xl sm:text-2xl font-medium font-['Inter'] leading-[32px] sm:leading-[42.71px]">
                Bharat’s Backbone
              </div>
            </div>
            <div className="text-[#5C6C68] text-base sm:text-lg font-bold font-['Manrope'] leading-relaxed px-2">
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
            <div className="text-[#1E3636] text-2xl sm:text-3xl font-medium font-['Manrope'] leading-loose">
              02
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="text-neutral-500 text-2xl sm:text-3xl font-semibold font-['Manrope'] leading-9 sm:leading-10">
                Bridging the
              </div>
              <div className="text-[#2D814A] text-xl sm:text-2xl font-medium font-['Inter'] leading-[32px] sm:leading-[42.71px]">
                Rural-Urban Digital Divide
              </div>
            </div>
            <div className="text-[#5C6C68] text-base sm:text-lg font-bold font-['Manrope'] leading-relaxed px-2">
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
      </div> */}

      <div className="flex flex-col w-full max-w-[1358px] mx-auto space-y-8 px-4 sm:px-6">
        {/* Feature Block */}
        <div className="flex flex-col lg:flex-row bg-[#EFE9E2] rounded-xl overflow-hidden">
          {/* Left Image */}
          <div className="w-full lg:w-[412px] h-[250px] lg:h-auto">
            <Image
              src="/TACFeatures1Image.png"
              width={412}
              height={412}
              className="object-cover w-full h-full"
              alt="TAC Feature 1"
            />
          </div>

          {/* Right Content */}
          <div className="w-full flex flex-col px-4 sm:px-6 lg:px-8 py-6 gap-6">
            {/* Feature 01 */}
            <div>
              <div className="text-[#1E3636] text-2xl sm:text-3xl font-medium font-['Manrope']">
                01
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <div className="text-neutral-500 text-2xl sm:text-3xl font-semibold font-['Manrope']">
                  Agriculture =
                </div>
                <div className="text-[#2D814A] text-xl sm:text-2xl font-medium font-['Inter']">
                  Bharat’s Backbone
                </div>
              </div>
              <div className="text-[#5C6C68] text-base sm:text-lg font-bold font-['Manrope'] mt-3 px-2">
                <ul className="list-disc">
                  <li>
                    Over 55% of Maharashtra’s population depends on farming for
                    livelihood.
                  </li>
                  <li>
                    Agriculture contributes significantly to the state economy,
                    making its digital transformation crucial.
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 02 */}
            <div>
              <div className="text-[#1E3636] text-2xl sm:text-3xl font-medium font-['Manrope']">
                02
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <div className="text-neutral-500 text-2xl sm:text-3xl font-semibold font-['Manrope']">
                  Bridging the
                </div>
                <div className="text-[#2D814A] text-xl sm:text-2xl font-medium font-['Inter']">
                  Rural-Urban Digital Divide
                </div>
              </div>
              <div className="text-[#5C6C68] text-base sm:text-lg font-bold font-['Manrope'] mt-3 px-2">
                <ul className="list-disc">
                  <li>
                    Most farmers lack access to technology, finance, and
                    markets.
                  </li>
                  <li>
                    TAC ensures digital inclusion, bringing rural Maharashtra
                    into the Digital India framework.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TACFeatures1;
