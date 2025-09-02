import Image from "next/image";

const megaProjects = [
  {
    image: "/DH1.jpg",
    title: "The Heart of India's Digital Infrastructure",
    description:
      "Establishing a world-class green & secure data center hub in Nagpur, powering India's digital transformation, AI innovation, cloud services, and data sovereignty.",
  },
  {
    image: "/DH2.jpg",
    title: "IndiaAI - First Generative AI of India",
    description:
      "Launching India's first generative AI platform to drive innovation across industries — from governance and education to agriculture and citizen services.",
  },
  {
    image: "/DH3.jpg",
    title: "Global Farmer Hub - Nagpur",
    description:
      "Creating a farmer hub in Nagpur to unite agri-tech, global markets, smart logistics, and AI-driven farming — making Maharashtra the epicenter of global agriculture trade.",
  },
];

const HomeMegaProjects = () => {
  return (
    <section className="py-16 px-4 bg-[#FDF5E5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Transformative Mega Projects of{" "}
          <span className="text-[#03CF65]">Digital Maharashtra 2027</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {megaProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMegaProjects;
