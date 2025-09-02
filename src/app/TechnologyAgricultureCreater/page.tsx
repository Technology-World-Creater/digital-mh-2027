import React from "react";
import TACFeatures1 from "./components/TACFeatures1";
import TACFeatures2 from "./components/TACFeatures2";
import TACImpacts from "./components/TACImpacts";
import TACAppDetails from "./components/TACAppDetails";
import TACContribution from "./components/TACContribution";
import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";

const page = () => {
  return (
    <>
      <HeroSection
        title="Technology Agriculture Creater"
        line={"/TACLine.png"}
        top={"top-24   h-10"}
        bgImage={"/TACImage.png"}
        logoImage={"/TACLogo.png"}
        description="TAC (Technology Agriculture Creater) is an AgriTech initiative under Technology World Creater (TWC), designed to digitize and modernize the agriculture ecosystem. It integrates technology, AI solutions, digital marketplaces, and financial services to empower farmers, buyers, and agri-businesses."
      />

      <div className="flex flex-col bg-white ">
        {/* <div className="flex flex-col px-[120px] py-12 text-start ">
          <div className="flex  text-gray-800 text-5xl font-semibold font-['Inter'] leading-[69.19px] gap-2 pb-4">
            Why TAC Matters for{" "}
            <span className="text-green-500 relative">
              {" "}
              Digital Maharashtra 2027
              <Image
                src={"/DigitalMaharashtraLine.png"}
                alt="Digital Maharashtra"
                width={250}
                height={2}
                className="absolute top-12 left-[270px]"
              />
            </span>{" "}
          </div>
          <div className="flex text-[#5C6C68] text-2xl font-medium font-['Inter'] leading-9">
            <p>
              <span className="text-neutral-500 text-2xl font-bold font-['Inter'] leading-9">
                {" "}
                TAC (Technology Agriculture Creater) is not just an AgriTech
                platform{" "}
              </span>
              —it’s a digital transformation engine for Maharashtra’s most vital
              sector: Agriculture. Here’s why TAC is a game-changer for the
              Digital Maharashtra 2027 mission:
            </p>
          </div>
        </div> */}

        <div className="flex flex-col px-6 sm:px-12 md:px-20 lg:px-[120px] py-8 md:py-12 text-start">
          <div className="flex flex-wrap text-gray-800 text-3xl sm:text-4xl md:text-5xl font-semibold font-['Inter'] leading-tight md:leading-[69.19px] gap-2 pb-4">
            Why TAC Matters for{" "}
            <span className="text-green-500 relative">
              Digital Maharashtra 2027
              <Image
                src={"/DigitalMaharashtraLine.png"}
                alt="Digital Maharashtra"
                width={250}
                height={2}
                className="absolute hidden sm:block top-8 md:top-12 left-0 md:left-[270px]"
              />
            </span>
          </div>

          <div className="flex text-[#5C6C68] text-lg sm:text-xl md:text-2xl font-medium font-['Inter'] leading-7 md:leading-9">
            <p>
              <span className="text-neutral-500 text-lg sm:text-xl md:text-2xl font-bold font-['Inter'] leading-7 md:leading-9">
                TAC (Technology Agriculture Creater) is not just an AgriTech
                platform
              </span>{" "}
              — it’s a digital transformation engine for Maharashtra’s most
              vital sector: Agriculture. Here’s why TAC is a game-changer for
              the Digital Maharashtra 2027 mission:
            </p>
          </div>
        </div>

        <div className="flex px-[120px] py-4">
          <TACFeatures1 />
        </div>

        <div className="flex px-[120px] py-4">
          <TACFeatures2 />
        </div>
        <div className="flex px-[120px] py-4">
          <TACImpacts />
        </div>
        <div className="flex  py-4">
          <TACAppDetails />
        </div>
        <div className="flex px-[120px] py-4">
          <TACContribution />
        </div>
      </div>
    </>
  );
};

export default page;
