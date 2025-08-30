import React from "react";
import Image from "next/image";

const Empowering = () => {
  return (
    <div className="bg-zinc-800 text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <p className="text-sm flex uppercase tracking-wider text-zinc-400 mb-2">
          <Image
            src="/star.svg"
            alt="Star Icon"
            height={0}
            width={0}
            sizes={"100vw"}
            className="w-5 h-5 mr-2"
          />{" "}
          EMPOWERING SERVICES, BEYOND LIMITS!
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Why Technology Service Creater (TSC)?
          <br />
          <div className="relative z-50">Building Responsibly</div>
          <div>
            <Image
              src="/image.png"
              alt="Line Icon"
              height={0}
              width={0}
              sizes={"100vw"}
              className="w-fit h-10 -mt-5 -z-0"
            />
          </div>
        </h2>

        <div className="relative w-full h-auto bg-black rounded-lg shadow-lg overflow-hidden mx-auto max-w-7xl my-8">
          <div className="relative p-8 md:p-16 flex flex-col md:flex-row items-center justify-between z-10">
            <div className="text-white md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <div className="mb-4">
                <h2 className="text-3xl text-left mb-10 font-semibold text-zinc-400">
                  Transforming Services with Innovation, Intelligence & Impact.
                </h2>
              </div>
              <p className="text-zinc-400 mb-3 text-sm">
                In today’s fast-moving world, the service industry needs more
                than manpower — it needs smart systems, agile technology, and
                scalable solutions.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                That’s where TSC comes in.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                We are building a next-gen service ecosystem powered by
                technology — offering intelligent solutions across sectors like
                education, business, retail, logistics, property, agriculture,
                and more.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center bg-zinc-800 py-20 rounded-xl">
              <Image
                src="/team.png"
                alt="Team Image"
                width={500}
                height={300}
                className="rounded-lg object-contain"
              />
              <Image
                src="/vector.png"
                alt="Technology World Creater Logo"
                width={400}
                height={400}
                className="absolute bottom-26 md:bottom-52 lg:bottom-33 w-[20em] md:w-[22em] lg:w-[31em]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="md:w-1/2">
            <Image
              src="/tree.png"
              alt="Tree Icon"
              height={0}
              width={0}
              sizes={"100vw"}
              className="w-14 h-14 my-10"
            />
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-normal">
                What Makes TSC Different?
              </h3>
            </div>
            <p className="text-gray-300 mb-8 text-base w-[80%]">
              To become Maharashtra&apos;s most innovative service-tech company
              — empowering businesses, communities, and governments with smart,
              inclusive, and sustainable solutions.
            </p>
            <button className="bg-black text-white font-normal py-3 px-10 rounded-full flex items-center space-x-2 ">
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
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20">
            <div className="flex items-start">
              <Image
                src="/star.svg"
                alt="Star Icon"
                height={0}
                width={0}
                sizes={"100vw"}
                className="w-5 h-5 mr-2"
              />
              <p className="text-gray-300">
                We Don&apos;t Just Provide Services — We Solve Root Problems
                Using Design Thinking, User Feedback, And Scalable Models.
              </p>
            </div>
            <div className="flex items-start">
              <Image
                src="/star.svg"
                alt="Star Icon"
                height={0}
                width={0}
                sizes={"100vw"}
                className="w-5 h-5 mr-2"
              />
              <p className="text-gray-300">
                Each Solution Is Uniquely Crafted — Whether It&apos;s A Mobile
                App, CRM Dashboard, Or AI Bot, It&apos;s Tailored To Your
                Service Flow.
              </p>
            </div>
            <div className="flex items-start">
              <Image
                src="/star.svg"
                alt="Star Icon"
                height={0}
                width={0}
                sizes={"100vw"}
                className="w-5 h-5 mr-2"
              />
              <p className="text-gray-300">
                We Connect Services With Government Schemes, Data Analytics, And
                Cloud Platforms — Creating A Full-Circle Solution.
              </p>
            </div>
            <div className="flex items-start">
              <Image
                src="/star.svg"
                alt="Star Icon"
                height={0}
                width={0}
                sizes={"100vw"}
                className="w-5 h-5 mr-2"
              />
              <p className="text-gray-300">
                We Use Lean Tech To Bring High Performance At Low Cost, Perfect
                For MSMEs, Rural Services, And Scalable Startups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empowering;
