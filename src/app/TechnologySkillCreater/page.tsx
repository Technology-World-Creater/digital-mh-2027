import React from "react";
import HeroSection from "@/components/common/HeroSection";

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
    </>
  );
};

export default page;
