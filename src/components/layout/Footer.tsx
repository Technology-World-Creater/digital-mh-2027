import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto">
        {/* Top Section: Growth and Funding Opportunities */}
        <div className="relative rounded-lg py-16 mb-10 overflow-hidden">
          <div className="absolute top-1/2 md:top-2/5 lg:top-0 left-0 w-full h-full">
            {/* Placeholder for the green wave/blob background */}
            <Image
              src="/Fline.png"
              alt="Footer Background"
              width={1000}
              height={200}
              objectFit="contain"
              className="w-full text-[#03CF65]"
            />
          </div>
          <div className="relative mx-auto z-10 text-center py-8 bg-white rounded-2xl w-80  md:w-[40em] h-60 flex items-center justify-center flex-col shadow-2xl mt-3">
            <h2 className="text-3xl md:text-4xl font-light text-[#03CF65] mb-4">
              Discover growth and funding {""}
              <span className="text-[#04984c] font-bold">opportunities</span>
            </h2>
            <button className="border border-[#03CF65] text-[#03CF65] px-8 py-3 rounded-xl hover:bg-[#03CF65] hover:text-white transition duration-300 flex items-center justify-center mx-auto space-x-2">
              <span>REGISTER NOW</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-24 max-w-7xl mx-auto px-4">
          {/* Left Section: Copyright and Logo */}
          <div className="w-full md:w-auto text-center md:text-left">
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

          <div className="flex md:flex-row gap-24 flex-wrap md:gap-28 w-full md:w-auto">
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
            <div className="pl-6 lg:pl-0">
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
