import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const initiatives = [
  {
    title: "Digital Maharashtra 2027",
    image: "/LogoHD.png",
    name: "MH",
    description:
      "An ambitious mission by Technology World Creater to digitally empower every sector — Education, Agriculture, Skills, Services, Property, and Innovation — creating a connected, future-ready Maharashtra by 2027.",
    link: "#",
  },
  {
    title: "Technology Education Creater",
    image: "/TECLogo.png",
    name: "Ed",
    description:
      "Transforming Maharashtra's learning ecosystem by blending global education standards with smart classrooms, digital skill programs, and AI-powered learning. Our goal is to make the state a leader in future-ready education.",
    link: "/technology-education-creater",
  },
  {
    title: "Technology Agriculture Creater",
    image: "/TACLogo.png",
    name: "Agri",
    description:
      "Revolutionizing farming with digital marketplaces, AI advisory, and smart supply chain solutions, ensuring farmers of Maharashtra become digital entrepreneurs by 2027.",
    link: "/technology-agriculture-creater",
  },
  {
    title: "Technology Service Creater",
    image: "/TSCLogo.png",
    name: "Service",
    description:
      "Bridging governance, citizens, and businesses with tech-driven services, ensuring Maharashtra becomes a model state for transparent, accessible, and efficient digital solutions.",
    link: "/technology-service-creater",
  },
  {
    title: "Brain Intelligence",
    image: "/BILogo.png",
    name: "Brain",
    description:
      "Brain Intelligence (BI) is the next step beyond AI — a DeepMind-inspired project for brain-level training, simulating human-like learning and decision-making for the future of innovation.",
    link: "/brain-intelligence",
  },
  {
    title: "Technology Property Creater",
    image: "/TPCLogo.png",
    name: "Property",
    description:
      "Shaping the future of Maharashtra's real estate through digital property platforms, smart housing, and sustainable urban development powered by technology.",
    link: "/technology-property-creater",
  },
  {
    title: "Technology Skill Creater",
    image: "/TSCLogo1.png",
    name: "Skill",
    description:
      "Delivering digital-first training, entrepreneurship programs, and global skill development to build a future-ready workforce for Maharashtra's Digital 2027 vision.",
    link: "/technology-skill-creater",
  },
  {
    title: "The Concept of Analysement",
    image: "/TCA.png",
    name: "Concept",
    description:
      "The Concept have power to reconstruct human potential itself. In a world where humanity could cease to exist, Analysement carries the vision to redefine, remake, and reimagine what it truly means to be human.",
    link: "/the-concept-of-analysement",
  },
];

const HomeKeyInitiatives = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-4">
          Key Initiatives Powering{" "}
          <span className="text-[#03CF65]">Digital Maharashtra 2027</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Collaborative contributions from TWC subsidiaries and partners driving
          digital transformation across Maharashtra.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white h-fit md:h-[23em] rounded-lg shadow-lg px-6 py-10 flex flex-col items-center"
            >
              <Image
                src={initiative.image}
                alt={initiative.title}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain mb-4 w-full h-20 md:h-24"
              />
              <div className="w-full">
                <Link
                  href={initiative.link}
                  className="text-sm font-semibold w-full flex items-center justify-between text-gray-800 mb-2"
                >
                  {initiative.title} <ArrowUpRight />
                </Link>
              </div>
              <div className="flex items-start py-1 w-full">
                <p className="px-3 py-1 text-sm rounded-full bg-gray-200 text-black">
                  {initiative.name}-Tech
                </p>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeKeyInitiatives;
