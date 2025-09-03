import React from "react";
import Image from "next/image";

const PropertyInnovationSection = () => {
  return (
    <section className="py-16 relative max-w-7xl mx-auto">
      <div className="container px-4">
        {/* Smart Infrastructure on Campus */}
        <div
          className={`flex relative flex-col-reverse md:flex-row  items-center justify-between mb-16 bg-[#EFE9E2] shadow-lg`}
        >
          <div
            className={`relative w-full md:w-[65%] p-8 md:py-24 lg:left-112`}
          >
            <h3 className="text-3xl font-semibold text-zinc-600 mb-4">
              Smart Infrastructure on Campus
            </h3>
            <div className="text-lg text-zinc-600 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Image src="/list.png" width={50} height={50} alt="" />
                <div>
                  Explore real-world{" "}
                  <span className="font-semibold">
                    property and infrastructure innovations
                  </span>
                  designed by top experts, focusing on{" "}
                  <span className="font-semibold">
                    smart buildings, IoT integration, and green technologies.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/list.png" width={50} height={50} alt="" />
                <div>
                  Analyze urban challenges, work in teams to design{" "}
                  <span className="font-semibold">
                    tech-driven property solutions,
                  </span>{" "}
                  and present them in live sessions.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/list.png" width={50} height={50} alt="" />
                <div>
                  Receive actionable insights and mentorship directly from{" "}
                  <span className="font-semibold">
                    real estate and infrastructure leaders
                  </span>{" "}
                  driving transformation.
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute top-0 md:top-6 md:left-0 w-full md:w-[35%] flex justify-center items-center pt-8 md:pt-0">
            <Image
              src={"/E1.jpg"}
              alt="Smart Infrastructure on Campus"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[20em] h-[18em] md:w-[28em] md:h-[25em] rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="container px-4">
        {/* Property Innovation Lab */}
        <div
          className={`flex relative flex-col-reverse justify-between mb-16 bg-[#EFE9E2] shadow-lg`}
        >
          <div className={`relative w-full md:w-[65%] p-8 md:py-24`}>
            <h3 className="text-3xl font-semibold text-zinc-600 mb-4">
              Property Innovation Lab
            </h3>
            <div className="text-lg text-zinc-600 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Image src="/list.png" width={50} height={50} alt="" />
                <div>
                  Work on actual
                  <span className="font-semibold">
                    smart property and infrastructure projects
                  </span>
                  alongside leading developers and government bodies.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/list.png" width={50} height={50} alt="" />
                <div>
                  Collaborate, brainstorm, and create futuristic
                  <span className="font-semibold">
                    urban development solutions
                  </span>{" "}
                  that address housing, sustainability, and digital
                  infrastructure needs.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/list.png" width={50} height={50} alt="" />
                <div>
                  Showcase your solutions directly to
                  <span className="font-semibold">
                    industry stakeholders,
                  </span>{" "}
                  proving your ability to innovate where it matters most.
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute top-0 md:top-6 md:right-0 w-full md:w-[35%] flex justify-center items-center pt-8 md:pt-0">
            <Image
              src={"/E2.jpg"}
              alt="Property Innovation Lab"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[20em] h-[18em] md:w-[28em] md:h-[25em] rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="container px-4">
        {/* Future Property Strategist Practicum */}
        <div
          className={`flex relative flex-col-reverse md:flex-row-reverse items-center justify-between mb-16 bg-[#EFE9E2] shadow-lg`}
        >
          <div className={`relative w-full md:w-[65%] p-8 md:py-24 `}>
            <h3 className="text-3xl font-semibold text-zinc-600 mb-4">
              Future Property Strategist Practicum
            </h3>
            <div className="text-lg text-zinc-600 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <Image src="/list.png" width={50} height={50} alt="" />
                <div>
                  Step into the role of a strategist—design
                  <span className="font-semibold">
                    urban blueprints, smart housing frameworks, and sustainable
                    property
                  </span>
                  models for large-scale adoption
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/list.png" width={50} height={50} alt="" />
                <div>
                  Present your proposals directly to
                  <span className="font-semibold">
                    investors, government agencies, and corporate partners
                  </span>{" "}
                  for impactful execution.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/list.png" width={50} height={50} alt="" />
                <div>
                  Gain firsthand experience in shaping the
                  <span className="font-semibold">
                    future of real estate, infrastructure, and smart city
                    development.
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:absolute top-0 md:top-6 md:left-0 w-full md:w-[35%] flex justify-center items-center pt-8 md:pt-0">
            <Image
              src={"/E3.jpg"}
              alt="Smart Infrastructure on Campus"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[20em] h-[18em] md:w-[28em] md:h-[25em] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInnovationSection;
