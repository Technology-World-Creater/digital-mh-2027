import Image from "next/image";

const TSCContribution = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 text-black">
        <h1 className="text-3xl font-bold text-center mb-12">
          TSC Contributes to <span className="text-green-500">Digital Maharashtra 2027</span> ?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col text-left p-6 bg-gray-100 rounded-lg shadow-md">
            <Image
              src="/1.jpg"
              alt="Skill Development"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
            <p className="text-sm">
              Empowering youth with advanced tech skills in AI, Cloud, IoT, Data Science, and Cybersecurity for future-ready jobs.
            </p>
          </div>

          <div className="flex flex-col text-left p-6 bg-gray-100 rounded-lg shadow-md">
            <Image
              src="/2.jpg"
              alt="Digital Learning Platforms"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Digital Learning Platforms</h3>
            <p className="text-sm">
              Creating interactive, AI-powered e-learning platforms for accessible and personalized education.
            </p>
          </div>

          <div className="flex flex-col text-left p-6 bg-gray-100 rounded-lg shadow-md">
            <Image
              src="/3.jpg"
              alt="Industry Partnerships"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Industry Partnerships</h3>
            <p className="text-sm">
              Collaborating with global tech companies to design industry-relevant curriculum and internships.
            </p>
          </div>

          <div className="flex flex-col text-left p-6 bg-gray-100 rounded-lg shadow-md">
            <Image
              src="/4.jpg"
              alt="Employment & Entrepreneurship"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Employment & Entrepreneurship</h3>
            <p className="text-sm">
              Supporting startups and freelancers through tech skill incubators and innovation hubs.
            </p>
          </div>

          <div className="flex flex-col text-left p-6 bg-gray-100 rounded-lg shadow-md">
            <Image
              src="/5.jpg"
              alt="Empowering Skills, Beyond Limits!"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Empowering Skills, Beyond Limits!</h3>
            <p className="text-sm">
              TECHNOLOGY SKILLS CREATER - POWERED BY TSC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TSCContribution;