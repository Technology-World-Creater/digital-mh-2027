import Image from "next/image";
import Link from "next/link";

const GrowthFundingOpportunities = () => {
  return (
    <div className="relative rounded-lg py-16 mb-10 overflow-hidden">
      <div className="absolute top-1/2 md:top-2/5 lg:top-0 left-0 w-full h-full">
        {/* Placeholder for the green wave/blob background */}
        <Image
          src="/Fline.png"
          alt="Footer Background"
          width={1000}
          height={200}
          className="w-full text-[#03CF65] object-cover"
        />
      </div>
      <div className="relative mx-auto z-10 text-center py-8 bg-white rounded-2xl w-80  md:w-[40em] h-60 flex items-center justify-center flex-col shadow-2xl mt-3">
        <h2 className="text-3xl md:text-4xl font-light text-[#03CF65] mb-4">
          Discover growth and funding {""}
          <span className="text-[#04984c] font-bold">opportunities</span>
        </h2>
        <Link
          href="https://forms.gle/d4XzUwYmES4hitjU7"
          target="_blank"
          className="border border-[#03CF65] text-[#03CF65] px-8 py-3 rounded-xl hover:bg-[#03CF65] hover:text-white transition duration-300 flex items-center justify-center mx-auto space-x-2"
        >
          <span>REGISTER NOW</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default GrowthFundingOpportunities;
