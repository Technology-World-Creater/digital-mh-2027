import Image from "next/image";

const NationsEducationVision = () => {
  const nations = [
    { name: "INDIA", flag: "/india.png" },
    { name: "Finland", flag: "/finland.png" },
    { name: "South Korea", flag: "/south-korea.png" },
    { name: "Japan", flag: "/japan.png" },
    { name: "Canada", flag: "/canada.png" },
    { name: "Germany", flag: "/germany.png" },
    { name: "Netherlands", flag: "/netherlands.png" },
    { name: "China", flag: "/china.png" },
    { name: "Australia", flag: "/australia.png" },
    { name: "Denmark", flag: "/denmark.png" },
  ];

  return (
    <section className="py-16 bg-white text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-black font-bold mb-4 text-center md:text-left">
          10 Nations,{" "}
          <span className="text-[#22C55E]">One Global Education Vision</span>
        </h2>
        <p className="text-lg text-[#5C6C68] mb-12 text-center md:text-left">
          Building the world&apos;s most advanced education system together.
        </p>
      </div>
      <div className=" bg-[#EFE9E2] p-4 rounded-lg">
        <div className="max-w-7xl mx-auto flex-wrap grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {nations.map((nation) => (
            <div key={nation.name} className="flex flex-col items-center">
              <Image
                src={nation.flag}
                alt={`${nation.name} Flag`}
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-md shadow-md mb-2 w-full h-36 object-cover"
              />
              <p className="text-2xl font-semibold text-gray-800">
                {nation.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationsEducationVision;
