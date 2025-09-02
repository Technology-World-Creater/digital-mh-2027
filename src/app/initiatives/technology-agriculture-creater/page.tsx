import React from "react";
import TACFeatures1 from "./components/TACFeatures1";
import TACFeatures2 from "./components/TACFeatures2";
import TACImpacts from "./components/TACImpacts";
import TACAppDetails from "./components/TACAppDetails";

import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";
import TSCContribution from "@/components/common/TSCContribution";
import ApplyNow from "@/components/common/ApplyNow";

const page = () => {
  return (
    <>
      <HeroSection
        title="Technology Agriculture Creater"
        line={"/TACLine.png"}
        top={"top-24 h-10"}
        bgImage={"/TACImage.png"}
        logoImage={"/TACLogo.png"}
        description="TAC (Technology Agriculture Creater) is an AgriTech initiative under Technology World Creater (TWC), designed to digitize and modernize the agriculture ecosystem. It integrates technology, AI solutions, digital marketplaces, and financial services to empower farmers, buyers, and agri-businesses."
      />

      <div className="flex flex-col bg-white w-full ">
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
              — it&lsquo;s a digital transformation engine for Maharashtra’s
              most vital sector: Agriculture. Here’s why TAC is a game-changer
              for the Digital Maharashtra 2027 mission:
            </p>
          </div>
        </div>

        <div className="flex  py-4">
          <TACFeatures1 />
        </div>

        <div className="flex  py-4">
          <TACFeatures2 />
        </div>
        <div className="flex py-4">
          <TACImpacts />
        </div>
        <div className="flex  py-4">
          <TACAppDetails />
        </div>
        <div className="flex mx-auto py-2">
          <TSCContribution
            title="How TAC Contributes to"
            description="Digital Maharashtra 2027 ?"
            line="/DigitalMaharashtraContributeLine.png"
            sections={[
              {
                imageSrc: "/AgriTechAdoptionImage.png",
                altText: "Agri-Tech Adoption",
                title: "Agri-Tech Adoption",
                description:
                  "Introducing AI-driven crop advisory, IoT-based smart sensors, and data analytics for precision farming.",
              },
              {
                imageSrc: "/DigitalMarketPlaceImage.png",
                altText: "Digital Marketplace",
                title: "Digital Marketplace",
                description:
                  "TAC Mandi: A digital auction platform for farmers to sell directly to buyers, traders, and exporters.",
              },
              {
                imageSrc: "/FinancialInclusionImage.png",
                altText: "Financial Inclusion",
                title: "Financial Inclusion",
                description:
                  "Access to digital loans, micro-credit, and crop insurance.Integrates UPI payments and secure digital wallets for farmers.",
              },

              {
                imageSrc: "/GlobalMarketAccessImage.png",
                altText: "Global Market Access",
                title: "Global Market Access",
                description:
                  "Connects Maharashtra farmers to global supply chains, ensuring better pricing and reduced waste.",
              },
            ]}
            mainImageSrc="/TACContributionImage.png"
            mainImageAlt="From Local Fields to Global Deals"
            logoImageSrc="/TACLogo.png"
            logoImageAlt="From Local Fields to Global Deals"
            logoTitle="From Local Fields to Global Deals"
          />
        </div>
      </div>

      <ApplyNow title={"Agri"} />
    </>
  );
};

export default page;
