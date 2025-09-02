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

      <div className="flex flex-col max-w-7xl mx-auto ">
        <div className="flex flex-col px-6 py-8 md:py-12 text-left">
          <div className="flex flex-wrap text-gray-800 text-4xl font-bold mb-4 gap-2 pb-4">
            Why TAC Matters for{" "}
            <span className="text-green-500 z-50 relative">
              Digital Maharashtra 2027
              <Image
                src={"/DigitalMaharashtraLine.png"}
                alt="Digital Maharashtra"
                width={250}
                height={2}
                className="absolute -z-10 hidden lg:block top-7 left-42"
              />
            </span>
          </div>

          <div className="flex text-[#5C6C68] text-xl leading-relaxed mb-1">
            <p>
              <span className="text-neutral-500 text-xl font-bold leading-relaxed">
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
