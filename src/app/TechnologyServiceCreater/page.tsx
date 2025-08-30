import React from "react";
import HeroSection from "../../components/common/HeroSection";
import MissionVision from "./components/MissionVision";
import DigitalTransformation from "@/components/common/DigitalTransformation";
import Empowering from "./components/Empowering";

const page = () => {
  const mission = {
    heading:
      "To empower businesses and individuals with next-generation technology services that are scalable, reliable, and future-ready.",
    image: "/mission.png",
    bullets: [
      "We aim to bridge the digital divide by delivering affordable IT solutions, cloud systems, AI-driven platforms, and end-to-end digital transformation services.",
      "Our solutions help organizations unlock growth and innovation while improving efficiency and customer experience.",
    ],
  };

  const vision = {
    heading:
      "To become a global leader in technology services, driving the digital economy through innovation, talent, and customer-centric solutions that seamlessly adopt cutting-edge technologies.",
    image: "/vision.png",
    bullets: [
      "We envision TSC as a trusted innovation partner that empowers individuals, businesses, governments, and communities to build a smarter, connected, and sustainable future.",
      "We will continuously push boundaries while staying grounded in real-world impact and inclusivity.",
    ],
  };
  return (
    <>
      <HeroSection
        title="Technology Service Creater"
        line={"/heroLine.png"}
        bgImage={"/TSCHero.jpg"}
        logoImage={"/TSCLogo.png"}
        description="Technology Service Creater (TSC) is a dynamic wing of TWC focused on
        delivering innovative, scalable, and intelligent digital services
        that solve real- world problems. We specialize in custom digital
        solutions, digital platforms, automation, data intelligence, and
        smart service systems for businesses, institutions, and governments."
      />
      <MissionVision mission={mission} vision={vision} />
      <DigitalTransformation
        title={"Driving Digital Transformation Across"}
        desc={
          "Technology Service Creater (TSC) plays a key role in building the digital foundation for Maharashtra&apos;s future. Through advanced IT services, <br /> cloud infrastructure, and AI-driven solutions, TSC accelerates the mission of making Digital Maharashtra by 2027."
        }
        img1={"/digital.jpg"}
        img1title={"Digital Infrastructure Development"}
        img1desc={
          "Providing secure, scalable cloud solutions for government and businesses, enabling paperless, faceless governance."
        }
        img2={"/e-gover.jpg"}
        img2title={"e-Governance Enablement"}
        img2desc={
          "Transforming citizen services with AI chatbots, online portals, and automation to ensure transparency and efficiency."
        }
        img3={"/cyber.jpg"}
        img3title={"Cybersecurity for Digital Trust"}
        img3desc={
          "Building strong security frameworks to safeguard government databases and citizen information."
        }
        img4={"/AI.jpg"}
        img4title={"AI & Automation Integration"}
        img4desc={
          "Deploying AI for predictive analytics, automated service delivery, and smart city solutions."
        }
        img5={"/support.jpg"}
        img5title={"Support for Startups & MSMEs"}
        img5desc={
          "Offering technology solutions and platforms to empower Maharashtra's digital economy."
        }
        img6={"/collab.png"}
        img6title={"Collaboration with Other TWC Verticals"}
        img6desc={
          "Integrating services with TAC for AgriTech, TSC for skill development, and TEC for digital education."
        }
        applytitle={"Service"}
      />
      <Empowering />
    </>
  );
};

export default page;
