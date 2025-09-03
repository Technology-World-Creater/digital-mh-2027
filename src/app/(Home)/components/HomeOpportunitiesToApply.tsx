import React from "react";
import Link from "next/link";

const HomeOpportunitiesToApply = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-yellow-50 py-10 px-4">
      <div className="bg-purple-100 text-purple-800 px-6 md:px-20 py-2 rounded-full text-sm font-semibold mb-8 shadow-md">
        Mission Digital MH 2027
      </div>
      <h1 className="text-green-600 text-4xl md:text-6xl font-bold text-center leading-tight mb-4">
        Opportunities to
        <br />
        Apply{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <p className="text-gray-700 text-center max-w-4xl mb-2 text-base md:text-lg leading-relaxed">
        Be part of Maharashtra&apos;s digital revolution&mdash;whether
        you&apos;re a startup ready to scale or an innovator shaping the future,
        this is your chance to contribute and grow with Digital Maharashtra
        2027.
      </p>
      <p className="text-gray-700 font-semibold text-base md:text-lg mb-12">
        Powered by Digital MH 2027
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <Link
          href="https://forms.gle/Wrjbr96UkjzPkzi39"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span>For Startups</span>
          <span className="text-xl">→</span>
        </Link>
        <Link
          href="https://forms.gle/KzBEwPnsgqhvGqef7"
          target="_blank"
          className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg border border-gray-300 flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span>Join the Mission</span>
          <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeOpportunitiesToApply;
