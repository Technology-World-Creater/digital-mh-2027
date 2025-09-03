import Image from "next/image";
import Link from "next/link";

const ministries = [
  {
    image: "/MH1.png",
    department: "Department of Higher & Technical Education",
    description:
      "Aims to build a globally competitive education ecosystem through technology-driven learning.",
  },
  {
    image: "/MH2.png",
    department: "Department of Agriculture",
    description:
      "Enabling smart farming, AgriTech adoption, and farmer access to digital marketplaces with TWC.",
  },
  {
    image: "/MH3.png",
    department: "Department of Industries",
    description:
      "Supporting startup ecosystem, incubation hubs, and digital entrepreneurship across Maharashtra.",
  },
  {
    image: "/MH4.jpg",
    department: "Department of Finance",
    description:
      "Driving digital payments, fintech growth, and enabling transparent financial governance.",
  },
  {
    image: "/MH5.png",
    department: "Ministry of Information Technology",
    description:
      "Expected to support world-class data centers ensuring India's data remains within the country.",
  },
  {
    image: "/MH6.png",
    department: "Department of Skill Development",
    description:
      "Training 1 crore citizens in digital skills, AI, coding, and new-age technologies.",
  },
  {
    image: "/MH7.jpg",
    department: "Department of General Administration",
    description:
      "Policy formulation and coordination across ministries for smooth execution of digital transformation.",
  },
  {
    image: "/MH8.png",
    department: "Department of Urban Development",
    description:
      "Implementing IoT solutions for smart traffic, waste management, and urban governance.",
  },
  ,
];

const leadership = [
  {
    image: "/team.png",
    name: "To Be Announced",
    linkedin: "#",
    title: "To Be Announced",
    description: "--",
  },
  {
    image: "/team.png",
    name: "To Be Announced",
    linkedin: "#",
    title: "To Be Announced",
    description: "--",
  },
  {
    image: "/team.png",
    name: "To Be Announced",
    linkedin: "#",
    title: "To Be Announced",
    description: "--",
  },
  {
    image: "/ramchandra.png",
    name: "Ramchandra Vaidya",
    linkedin: "#",
    title: "CFO of TWC Org.",
    description: "Director of TWC Org.",
  },
  {
    image: "/sahil.png",
    name: "Sahil Vaidya",
    linkedin: "#",
    title: "Founder of TWC Org.",
    description: "Leading Digital MH 2027 Official Confirmed",
  },
];

const HomeGovernmentAndLeadership = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Government Ministries Driving{" "}
          <span className="text-[#03CF65]">Digital Maharashtra 2027</span>
        </h2>
        <p className="text-base md:text-lg font-semibold text-gray-600 mb-12">
          Multiple departments are expected to collaborate to ensure a
          successful digital transformation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-left border border-gray-200 flex flex-col items-center"
            >
              <div className="relative w-full h-32 mb-4">
                <Image
                  src={ministry?.image || ""}
                  alt={ministry?.department || ""}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className="text-gray-700 font-medium mb-2 text-center">
                {ministry?.department}
              </p>
              <p className="text-gray-600 text-sm text-center">
                {ministry?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-16 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0 text-center md:text-left">
            Leadership & Stakeholder Support - To Be Announced
          </h2>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <button className="bg-[#03CF65] text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition duration-300">
              <span>Explore More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {leadership.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200"
            >
              <div className="relative w-full h-40 lg:h-32 overflow-hidden mb-2">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-sm border-b-[1px] px-2 py-1 border-gray-500 border-solid font-semibold flex items-center gap-2 w-full justify-between text-gray-500 ">
                {person.name}
                {person.linkedin && (
                  <Link
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-zinc-900 hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                )}
              </h3>
              <p className="text-gray-800 text-sm font-semibold mb-2 w-full text-left px-2">
                {person.title}
              </p>
              <div className="h-12 w-full bg-gray-100 pt-2 px-2">
                <p className="text-gray-600 text-xs text-left">
                  {person.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGovernmentAndLeadership;
