import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const TACAppDetails = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full bg-[#EFE9E2] gap-4 lg:gap-20 py-6">
        <div className="max-w-7xl mx-auto flex gap-40">
          {/* Left Content */}
          <div className="flex flex-col px-6 sm:px-10 lg:px-0 py-2 sm:py-14  gap-10 sm:gap-16">
            {/* Headings */}
            <div className="flex flex-col text-center lg:text-left gap-2">
              <h1 className="text-[#1E3636] text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Manrope'] leading-snug sm:leading-[45px] lg:leading-[60.23px]">
                Empowering Farmers,
              </h1>
              <h1 className="text-[#1E3636] text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Manrope'] leading-snug sm:leading-[45px] lg:leading-[60.23px]">
                Enriching Dealers
              </h1>
              <h2 className="text-[#2D814A] text-2xl sm:text-3xl lg:text-5xl font-medium font-['Inter'] leading-snug sm:leading-[40px] lg:leading-[55.43px]">
                Your Trusted Agri-Partner
              </h2>
            </div>

            {/* Subtext + Button */}
            <div className="flex flex-col sm:flex-row sm:items-center relative bg-white rounded-lg px-6 sm:px-8 py-6 gap-4 sm:gap-8 text-center sm:text-left">
              <div className="flex flex-col">
                <p className="text-[#1A2F2F] text-sm sm:text-base font-medium font-['Manrope'] leading-snug">
                  TAC (Technology Agriculture Creater) is an
                </p>
                <p className="text-[#1A2F2F] text-sm sm:text-base font-medium font-['Manrope'] leading-snug">
                  AgriTech initiative by TWC
                </p>
              </div>

              {/* Button */}
              <Link
                href={"https://technologyagriculturecreater.com"}
                target="_blank"
                className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 text-white text-base sm:text-lg lg:text-xl font-medium font-['Inter'] bg-[#03CF65] rounded-lg sm:static sm:ml-auto lg:absolute lg:-right-24 lg:top-1/2 lg:-translate-y-1/2 cursor-pointer"
              >
                <span>Explore Now</span>
                <FaArrowRightLong />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center px-6 sm:px-10 lg:px-0">
            <Image
              src="/TACAppImage.png"
              width={445}
              height={258}
              className="object-contain"
              alt="TAC App"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TACAppDetails;
