import TechnologyWorldCreater from "@/components/common/TechnologyWorldCreater";
import GrowthFundingOpportunities from "@/components/common/GrowthFundingOpportunities";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div>
        <TechnologyWorldCreater />
        <GrowthFundingOpportunities />
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-24 max-w-7xl mx-auto px-4">
          {/* Left Section: Copyright and Logo */}
          <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-gray-600 text-sm text-left mb-4">
              © 2025 Technology World Creater Private Limited
            </p>
            <p className="text-gray-600 text-sm mb-4 flex items-center">
              Made with{" "}
              <span className="mx-1 text-gray-600">
                {" "}
                <Heart size={15} color="#4a5568" fill="#4a5568" />
              </span>{" "}
              in India
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Digital Maharashtra 2027 Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-80 h-auto"
              />
            </div>
            <div className="flex justify-center md:justify-start space-x-10 mx-auto md:mx-0">
              <Link
                href="#"
                className="text-2xl text-gray-600 hover:text-[#03CF65]"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                href="#"
                className="text-2xl text-gray-600 hover:text-[#03CF65]"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href="#"
                className="text-2xl text-gray-600 hover:text-[#03CF65]"
              >
                <i className="fab fa-youtube"></i>
              </Link>
              <Link
                href="#"
                className="text-2xl text-gray-600 hover:text-[#03CF65]"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          <div className="flex md:flex-row gap-24 flex-wrap w-full md:w-auto">
            {/* Support Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/who-we-are"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Who we are
                  </Link>
                </li>
                <li>
                  <Link
                    href="/together-from-2027"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Together for 2027
                  </Link>
                </li>
                <li>
                  <Link
                    href="/get-involved"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Initiatives Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Our Initiatives</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/initiatives/technology-education-creater"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Technology Education Creater
                  </Link>
                </li>
                <li>
                  <Link
                    href="/initiatives/technology-agriculture-creater"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Technology Agriculture Creater
                  </Link>
                </li>
                <li>
                  <Link
                    href="/initiatives/technology-service-creater"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Technology Service Creater
                  </Link>
                </li>
                <li>
                  <Link
                    href="/initiatives/brain-intelligence"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Brain Intelligence
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Our Initiatives</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/initiatives/technology-property-creater"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Technology Property Creater
                  </Link>
                </li>
                <li>
                  <Link
                    href="/initiatives/technology-skill-creater"
                    className="text-gray-600 hover:text-[#03CF65]"
                  >
                    Technology Skill Creater
                  </Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    The Concept of Analysement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
