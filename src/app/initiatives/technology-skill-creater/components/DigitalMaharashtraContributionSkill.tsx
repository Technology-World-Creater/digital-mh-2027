import { CheckCircle } from "lucide-react";

const DigitalMaharashtraContributionSkill = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Contribution to
            <br />
            Digital Maharashtra
            <br />
            2027
          </h2>
        </div>
        <div className="md:w-1/2">
          <ul className="space-y-4 font-semibold">
            <li className="flex items-start">
              <CheckCircle className="text-[#03CF65] mr-3 mt-1" size={20} />
              <span className="text-gray-700 text-lg">
                Empowering Startups & MSMEs with skilled talent.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#03CF65] mr-3 mt-1" size={20} />
              <span className="text-gray-700 text-lg">
                Bridging the Digital Skill Gap across urban & rural sectors.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#03CF65] mr-3 mt-1" size={20} />
              <span className="text-gray-700 text-lg">
                Empowering Startups & MSMEs with skilled talent.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#03CF65] mr-3 mt-1" size={20} />
              <span className="text-gray-700 text-lg">
                Driving Employment & Entrepreneurship
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalMaharashtraContributionSkill;
