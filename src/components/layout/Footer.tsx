import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top Section: Growth and Funding Opportunities */}
        <div className="relative bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-8 mb-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            {/* Placeholder for the green wave/blob background */}
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              <path
                fill="#03CF65"
                d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,200 L0,200 Z"
              />
            </svg>
          </div>
          <div className="relative z-10 text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Discover growth and funding{" "}
              <span className="text-[#03CF65]">opportunities</span>
            </h2>
            <button className="border border-[#03CF65] text-[#03CF65] px-8 py-3 rounded-full hover:bg-[#03CF65] hover:text-white transition duration-300 flex items-center justify-center mx-auto space-x-2">
              <span>REGISTER NOW</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex gap-40 max-w-7xl mx-auto">
          {/* Left Section: Copyright and Logo */}
          <div className="col-span-2">
            <p className="text-gray-600 text-sm mb-4">
              © 2025 Technology World Creater Private Limited
            </p>
            <p className="text-gray-600 text-sm mb-4 flex items-center">
              Made with <span className="mx-1 text-gray-600">♥️</span> in India
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Digital Maharashtra 2027 Logo"
                width={350}
                height={250}
              />
            </div>
            <div className="flex space-x-10 mx-auto">
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

          <div className="flex gap-40">
            {/* Platform Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Book a Demo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Become a Partner
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    WhatsApp Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    About AISensy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* FREE Tools Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">FREE Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    WhatsApp Button
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Generate WhatsApp Link
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Download Android app
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Download iOS app
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#03CF65]">
                    Refund Policy
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
