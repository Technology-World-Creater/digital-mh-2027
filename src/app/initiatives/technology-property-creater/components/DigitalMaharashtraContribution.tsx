import { CheckCircle } from "lucide-react";

const DigitalMaharashtraContribution = () => {
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
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="text-[#03CF65] mr-3 mt-1" size={20} />
              <span className="text-gray-700 text-lg">
                Digitizing Maharashtra&apos;s Real Estate &amp; Property Ecosystem
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#03CF65] mr-3 mt-1" size={20} />
              <span className="text-gray-700 text-lg">
                Promoting Smart Cities & Infrastructure Development
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#03CF65] mr-3 mt-1" size={20} />
              <span className="text-gray-700 text-lg">
                Bridging the Technology Gap in Property Management
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-[#03CF65] mr-3 mt-1" size={20} />
              <span className="text-gray-700 text-lg">
                Transparency & Economic Growth in Property Sector
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalMaharashtraContribution;
