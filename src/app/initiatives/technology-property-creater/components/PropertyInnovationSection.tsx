import React from "react";
import Image from "next/image";

const PropertyInnovationSection = ({
  img,
  classs,
  className,
}: {
  img: string;
  classs: string;
  className: string;
}) => {
  return (
    <section className="py-16 relative max-w-7xl mx-auto">
      <div className="container px-4">
        {/* Smart Infrastructure on Campus */}
        <div
          className={`flex relative flex-col ${classs} items-center justify-between mb-16 bg-[#EFE9E2] shadow-lg`}
        >
          <div className={`relative w-full md:w-[65%] p-8 py-24 ${className}`}>
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
          <div className="absolute top-6">
            <Image
              src={img}
              alt="Smart Infrastructure on Campus"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[28em] h-[25em] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInnovationSection;
