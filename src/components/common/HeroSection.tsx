import Image from "next/image";

const HeroSection = ({
  title,
  line,
  top,
  bgImage,
  logoImage,
  description,
}: {
  title: string;
  line: string;
  top: string;
  bgImage: string;
  logoImage: string;
  description: string;
}) => {
  return (
    <header className="relative bg-[#5A7D7C] py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Placeholder for the background image/pattern */}
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="opacity-30 object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-left mb-10 md:mb-0 md:w-1/2">
          <h1 className="relative text-4xl md:text-4xl font-bold mb-4 z-50">
            What is <br />
            <span className="text-white-800">{title} ?</span>
          </h1>
          <Image
            src={line}
            alt="Line"
            width={380}
            height={500}
            className={`-mt-6 z-10 hidden lg:block absolute ${top}`}
          />
          <p className="text-lg leading-relaxed mt-5">{description}</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg flex items-center space-x-4">
            <Image
              src={logoImage}
              alt="Technology Service Creater Logo"
              width={520}
              height={50}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
