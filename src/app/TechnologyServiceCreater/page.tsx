import React from "react";
import Header from "../../components/common/Header";
import MissionVision from "./components/MissionVision";
import DigitalTransformation from "./components/DigitalTransformation";
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
      <Header
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
      <DigitalTransformation />
      <Empowering />
    </>
  );
};

export default page;
