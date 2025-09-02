import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TACAppDetails = () => {
  return (
    <>
      <div className="flex flex-row w-full bg-[#EFE9E2] gap-12">
        <div className="flex flex-col px-24 py-44 gap-16">
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex text-[#1E3636] text-5xl font-semibold font-['Manrope'] leading-[60.23px] ">
                Empowering Farmers,
              </div>
              <div className="flex text-[#1E3636] text-5xl font-semibold font-['Manrope'] leading-[60.23px]">
                Enriching Dealers
              </div>
              <div className="flex text-[#2D814A] text-5xl font-medium font-['Inter'] leading-[55.43px]">
                Your Trusted Agri-Partner
              </div>
            </div>
          </div>

          <div className="flex flex-row px-8 py-4 bg-white relative">
            <div className="flex flex-col">
              <div className="flex text-[#1A2F2F] text-base font-medium font-['Manrope'] leading-snug">
                TAC (Technology Agriculture Creater) is an by TWC
              </div>
              <div className="flex text-[#1A2F2F] text-base font-medium font-['Manrope'] leading-snug">
                AgriTech initiative by TWC
              </div>
            </div>

            <div className="flex flex-row gap-3 p-3  text-white text-xl font-medium font-['Inter'] bg-[#03CF65] absolute -right-24 rounded-lg  top-3   ">
              <div className="flex">Explore Now</div>
              <div className="flex items-center">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-10   ">
          <Image
            src="/TACAppDetailsImage.png"
            width={645}
            height={558}
            className="bg-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default TACAppDetails;
