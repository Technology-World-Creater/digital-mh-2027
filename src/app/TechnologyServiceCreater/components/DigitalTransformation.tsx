import Image from "next/image";

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

        <div className="relative bg-[#B1FFD7] py-12 px-4 text-left mb-12 max-w-6xl">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
            <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 w-[80%] md:mb-0">
              Join the movement to transform Service-Tech Sector. Be part of
              Digital Maharashtra 2027.
            </h2>
            <button className="flex absolute lg:-right-20 right-20 bottom-2 lg:bottom-2/5 text-lg leading-relaxed bg-green-500 hover:bg-green-600 text-white font-light py-3 px-8 rounded-lg items-center space-x-2">
              <span>APPLY NOW</span>
              <svg
                xmlns="http://www.w3.org/6000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
