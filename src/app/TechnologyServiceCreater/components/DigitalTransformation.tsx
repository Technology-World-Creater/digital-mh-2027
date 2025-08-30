import Image from "next/image";
import ApplyNow from "@/components/common/ApplyNow";

const DigitalTransformation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 text-black">
        <h1 className="text-3xl font-bold text-left mb-4">
          Driving Digital Transformation Across <br /> Maharashtra
        </h1>
        <p className="text-left text-base mb-12 mx-auto">
          Technology Service Creater (TSC) plays a key role in building the
          digital foundation for Maharashtra&apos;s future. Through advanced IT
          services, <br /> cloud infrastructure, and AI-driven solutions, TSC
          accelerates the mission of making Digital Maharashtra by 2027.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col text-left">
            <Image
              src="/digital.jpg"
              alt="Digital Infrastructure Development"
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl text-left font-semibold mb-2">
              Digital Infrastructure Development
            </h3>
            <p className="text-sm">
              Providing secure, scalable cloud solutions for government and
              businesses, enabling paperless, faceless governance.
            </p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src="/e-gover.jpg"
              alt="e-Governance Enablement"
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">
              e-Governance Enablement
            </h3>
            <p className="text-sm">
              Transforming citizen services with AI chatbots, online portals,
              and automation to ensure transparency and efficiency.
            </p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src="/cyber.jpg"
              alt="Cybersecurity for Digital Trust"
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">
              Cybersecurity for Digital Trust
            </h3>
            <p className="text-sm">
              Building strong security frameworks to safeguard government
              databases and citizen information.
            </p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src="/AI.jpg"
              alt="AI & Automation Integration"
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">
              AI & Automation Integration
            </h3>
            <p className="text-sm">
              Deploying AI for predictive analytics, automated service delivery,
              and smart city solutions.
            </p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src="/support.jpg"
              alt="Support for Startups & MSMEs"
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">
              Support for Startups & MSMEs
            </h3>
            <p className="text-sm">
              Offering technology solutions and platforms to empower
              Maharashtra&apos;s digital economy.
            </p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src="/collab.png"
              alt="Collaboration with Other TWC Verticals"
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">
              Collaboration with Other TWC Verticals
            </h3>
            <p className="text-sm">
              Integrating services with TAC for AgriTech, TSC for skill
              development, and TEC for digital education.
            </p>
          </div>
        </div>

        <hr className="py-10 w-[80%]" />

        <ApplyNow title={"Service"} />
      </div>
    </section>
  );
};

export default DigitalTransformation;
