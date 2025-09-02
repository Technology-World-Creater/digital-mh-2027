import Image from "next/image";

const TogetherHeroSection = () => {
  return (
    <section className="relative h-auto md:h-[500px] bg-white flex flex-col md:flex-row items-center justify-center overflow-hidden py-8 md:py-0">
      <div className="relative z-10 flex flex-col-reverse gap-20 md:flex-row items-center justify-between w-full h-full max-w-7xl mx-auto px-4">
        {/* Left Content - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left pr-0 md:pr-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            About{" "}
            <span className="text-[#03CF65]">Digital Maharashtra 2027</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            Digital Maharashtra 2027 is a visionary mission to transform
            Maharashtra into a digitally empowered, globally competitive, and
            innovation-driven state by the year 2027. Rooted in the values of
            progress, inclusivity, and technology-led growth, the initiative
            aims to bridge the gap between citizens, businesses, government, and
            global opportunities.
          </p>
        </div>

        {/* Right Content - Images */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center pl-0 md:pl-8 mt-8 md:mt-0">
          <Image
            src="/LogoHD.png"
            alt="Digital Maharashtra 2027 Logo"
            width={1000}
            height={100}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default TogetherHeroSection;
