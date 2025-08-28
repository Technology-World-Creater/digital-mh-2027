import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#03CF65] py-2 px-4 text-white flex justify-end items-center space-x-10">
        <Link href="#" className="hover:text-gray-200">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link href="#" className="hover:text-gray-200">
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link href="#" className="hover:text-gray-200">
          <i className="fab fa-youtube"></i>
        </Link>
        <Link href="#" className="hover:text-gray-200">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="#" className="hover:text-gray-200">
          <i className="fab fa-twitter"></i>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Main Navbar */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Digital Maharashtra 2027 Logo"
              width={200}
              height={30}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#"
              className="text-gray-700 hover:text-[#03CF65] font-medium"
            >
              Who We Are
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#03CF65] font-medium"
            >
              Initiatives
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#03CF65] font-medium"
            >
              Chapters
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#03CF65] font-medium"
            >
              Get Involved
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#03CF65] font-medium"
            >
              Resources
            </Link>
          </div>

          {/* Contact Us Button */}
          <button className="hidden md:flex bg-[#03CF65] text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-300 items-center space-x-2">
            <span>Contact Us</span>
            <i className="fas fa-arrow-right"></i>
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
