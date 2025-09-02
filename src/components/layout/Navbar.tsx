"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] =
    useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#03CF65] py-2 px-4 text-white flex justify-end items-center space-x-5 md:space-x-10">
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
          <div className="hidden lg:flex space-x-8">
            <Link
              href="/"
              className={`font-medium ${
                pathname === "/"
                  ? "text-[#03CF65]"
                  : "text-gray-700 hover:text-[#03CF65]"
              }`}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() =>
                  setIsInitiativesDropdownOpen(!isInitiativesDropdownOpen)
                }
                className={`font-medium ${pathname.startsWith('/initiatives') ? 'text-[#03CF65]' : 'text-gray-700 hover:text-[#03CF65]'} focus:outline-none flex items-center`}
              >
                Our Initiatives
                <svg
                  className={`ml-1 h-4 w-4 transform ${isInitiativesDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isInitiativesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="/initiatives/technology-education-creater"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Education Creater
                  </Link>
                  <Link
                    href="/initiatives/technology-agriculture-creater"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Agriculture Creater
                  </Link>
                  <Link
                    href="/initiatives/technology-service-creater"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Service Creater
                  </Link>
                  <Link
                    href="/initiatives/brain-intelligence"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Brain Intelligence
                  </Link>
                  <Link
                    href="/initiatives/technology-property-creater"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Property Creater
                  </Link>
                  <Link
                    href="/initiatives/technology-skills-creater"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Skills Creater
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/together-from-2027"
              className={`font-medium ${
                pathname === "/together-from-2027"
                  ? "text-[#03CF65]"
                  : "text-gray-700 hover:text-[#03CF65]"
              }`}
            >
              Together from 2027
            </Link>
            <Link
              href="/get-involved"
              className={`font-medium ${
                pathname === "/get-involved"
                  ? "text-[#03CF65]"
                  : "text-gray-700 hover:text-[#03CF65]"
              }`}
            >
              Get Involved
            </Link>
          </div>

          {/* Contact Us Button */}
          <Link
            href="/contact-us"
            className="hidden lg:flex bg-[#03CF65] text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-300 items-center space-x-2"
          >
            <span>Contact Us</span>
            <i className="fas fa-arrow-right"></i>
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
            >
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <Link
              href="/"
              className={`block px-4 py-2 ${
                pathname === "/"
                  ? "text-[#03CF65]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() =>
                  setIsInitiativesDropdownOpen(!isInitiativesDropdownOpen)
                }
                className={`block px-4 py-2 ${pathname.startsWith('/initiatives') ? 'text-[#03CF65]' : 'text-gray-700 hover:bg-gray-100'} focus:outline-none w-full text-left flex items-center`}
              >
                Our Initiatives
                <svg
                  className={`ml-1 h-4 w-4 transform ${isInitiativesDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isInitiativesDropdownOpen && (
                <div className="bg-white py-1 z-50">
                  <Link
                    href="/initiatives/technology-education-creater"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Education Creater
                  </Link>
                  <Link
                    href="/initiatives/technology-agriculture-creater"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Agriculture Creater
                  </Link>
                  <Link
                    href="/initiatives/technology-service-creater"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Service Creater
                  </Link>
                  <Link
                    href="/initiatives/brain-intelligence"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Brain Intelligence
                  </Link>
                  <Link
                    href="/initiatives/technology-property-creater"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Property Creater
                  </Link>
                  <Link
                    href="/initiatives/technology-skills-creater"
                    className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Technology Skills Creater
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/together-from-2027"
              className={`block px-4 py-2 ${
                pathname === "/together-from-2027"
                  ? "text-[#03CF65]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Together from 2027
            </Link>
            <Link
              href="/GetInvolved"
              className={`block px-4 py-2 ${
                pathname === "/GetInvolved"
                  ? "text-[#03CF65]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Get Involved
            </Link>
            <Link
              href="/ContactUs"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
