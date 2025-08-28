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
            <button className="absolute -right-20 text-lg leading-relaxed bg-green-500 hover:bg-green-600 text-white font-light py-3 px-8 rounded-lg flex items-center space-x-2">
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

        <div className="bg-gray-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
              EMPOWERING SERVICES, BEYOND LIMITS!
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Technology Service Creater (TSC)?
              <br />
              Building Responsibly
            </h2>

            <div className="bg-gray-800 rounded-lg p-8 flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-4">
                  Transforming Services with
                  <br />
                  Innovation, Intelligence & Impact.
                </h3>
                <p className="text-gray-300 mb-4">
                  In today&apos;s fast-moving world, the service industry needs
                  more than manpower – it needs smart systems, agile technology,
                  and scalable solutions.
                </p>
                <p className="text-gray-300 mb-4">
                  That&apos;s where TSC comes in.
                </p>
                <p className="text-gray-300">
                  We are building a next-gen service ecosystem powered by
                  technology – offering intelligent solutions across sectors
                  like education, business, retail, logistics, property,
                  agriculture, and more.
                </p>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <Image
                  src="/team-group.svg" // Placeholder for team image
                  alt="Team Group"
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/6000/svg"
                    className="h-6 w-6 text-ble-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold">
                    What Makes TSC Different?
                  </h3>
                </div>
                <p className="text-gray-300 mb-8">
                  To become Maharashtra&apos;s most innovative service-tech
                  company — empowering businesses, communities, and governments
                  with smart, inclusive, and sustainable solutions.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2">
                  <span>Explore More</span>
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
              <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/6000/svg"
                    className="h-5 w-5 text-ble-400 mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-300">
                    We Don&apos;t Just Provide Services — We Solve Root Problems
                    Using Design Thinking, User Feedback, And Scalable Models.
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/6000/svg"
                    className="h-5 w-5 text-ble-400 mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-300">
                    Each Solution Is Uniquely Crafted — Whether It&apos;s A
                    Mobile App, CRM Dashboard, Or AI Bot, It&apos;s Tailored To
                    Your Service Flow.
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/6000/svg"
                    className="h-5 w-5 text-ble-400 mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-300">
                    We Connect Services With Government Schemes, Data Analytics,
                    And Cloud Platforms — Creating A Full-Circle Solution.
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/6000/svg"
                    className="h-5 w-5 text-ble-400 mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-300">
                    We Use Lean Tech To Bring High Performance At Low Cost,
                    Perfect For MSMEs, Rural Services, And Scalable Startups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
