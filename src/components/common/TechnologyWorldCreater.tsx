import Image from "next/image";

const TechnologyWorldCreater = () => {
  return (
    <div className="relative w-full h-auto bg-black rounded-lg shadow-lg overflow-hidden mx-auto max-w-7xl my-8">
      <div className="relative p-8 md:p-16 flex flex-col md:flex-row items-center justify-between z-10">
        <div className="text-white md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <div className="flex items-center mb-4 ml-5">
            <Image
              src="/TWCLogo.png"
              alt="Technology World Creater Logo"
              width={400}
              height={400}
              className=""
            />
          </div>
          <h2 className="text-base font-semibold text-gray-400">
            Empowering Innovation Beyond Limits
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            We are not just a tech company. We are a platform for building the
            future.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            TWC is the visionary force behind a family of next-gen tech
            companies focused on transforming traditional sectors through
            innovation, design, and digital intelligence. From agriculture to
            property, services to education — we build impact-first tech
            solutions that uplift industries and empower communities.
          </p>
          <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white font-bold py-3 px-16 rounded-full shadow-lg hover:shadow-xl transition duration-300 w-full flex items-center justify-center">
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
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
            className="absolute bottom-26 md:bottom-52 lg:bottom-36 w-[20em] md:w-[22em] lg:w-[31em]"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyWorldCreater;
