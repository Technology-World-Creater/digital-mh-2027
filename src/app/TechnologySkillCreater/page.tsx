import React from "react";
import HeroSection from "@/components/common/HeroSection";
import DigitalTransformation from "@/components/common/DigitalTransformation";
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
      <DigitalTransformation
        title={"Empowering Digital Skills Across"}
        desc={
          "Technology Skill Creater (TSC) plays a critical role in shaping Maharashtra's digital workforce. By providing advanced technology training,upskilling opportunities, and AI-driven learning platforms, TSC ensures that citizens and professionals are equipped to thrive in the digital economy by 2027."
        }
        img1={"/1.jpg"}
        img1title={"Digital Literacy & Upskilling"}
        img1desc={
          "Equipping citizens with essential digital skills for everyday life and work."
        }
        img2={"/2.jpg"}
        img2title={"AI & Emerging Tech Training"}
        img2desc={
          "Offering programs in AI, cloud computing, IoT, and cybersecurity for future-ready professionals."
        }
        img3={"/3.jpg"}
        img3title={"Skill Development for Students & Youth"}
        img3desc={
          "Providing industry-aligned certifications and career pathways for young talent."
        }
        img4={"/4.jpg"}
        img4title={"Corporate & MSME Digital Enablement"}
        img4desc={
          "Delivering tailored digital transformation workshops for businesses."
        }
        img5={"/5.jpg"}
        img5title={"Entrepreneurship & Startup Support"}
        img5desc={
          "Training aspiring founders in digital tools and business technology."
        }
        img6={"/collab.png"}
        img6title={"Collaboration with Other TWC Verticals"}
        img6desc={
          "Integrating services with TAC for AgriTech, TSC for skill development, and TEC for digital education."
        }
        applytitle={"Skill"}
      />
    </>
  );
};

export default page;
