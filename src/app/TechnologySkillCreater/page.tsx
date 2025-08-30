import React from "react";
import HeroSection from "@/components/common/HeroSection";
import ContributionToDigitalMaharashtra from "./components/ContributionToDigitalMaharashtra";
import OurVision from "@/components/common/OurVision";

const page = () => {
  return (
    <>
      <HeroSection
        bgImage="/TSCHero1.jpg"
        title="Technology Skills Creater"
        line="/heroLine.png"
        description="Technology Skill Creater (TSC) is a flagship initiative under Digital Maharashtra 2027, dedicated to bridging the digital skills gap by empowering individuals with industry-relevant technology skills. TSC focuses on AI, IoT, Cloud Computing, Data Analytics, Cybersecurity, and Software Development, preparing Maharashtra's youth and workforce for the Industry 4.0 revolution."
        logoImage="/TSCLogo1.png"
      />
      <OurVision
        title={"Skill"}
        desc={
          "We believe skills are the backbone of a digital economy. By merging innovation and industry needs, TSC is shaping the workforce for the next decade."
        }
        desc1={
          "To empower youth with next-gen tech skills through innovation and practical learning."
        }
        desc2={
          "To create an industry-aligned skill curriculum that meets global job market demands."
        }
        desc3={
          "To collaborate with leading tech giants and institutions to build the worlds most advanced skill development."
        }
      />
      <ContributionToDigitalMaharashtra />
    </>
  );
};

export default page;
