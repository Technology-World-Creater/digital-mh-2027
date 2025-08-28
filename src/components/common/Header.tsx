import Image from "next/image";

const Header = () => {
  return (
    <header className="relative bg-[#5A7D7C] py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Placeholder for the background image/pattern */}
        <Image
          src="/Fline.png" // Assuming Fline.png is a suitable background image
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white text-center md:text-left mb-10 md:mb-0 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What is <br />
            <span className="text-white-800">Technology Service Creater ?</span>
          </h1>
          <p className="text-lg leading-relaxed">
            Technology Service Creater (TSC) is a dynamic wing of TWC focused on
            delivering innovative, scalable, and intelligent digital services that solve real-
            world problems. We specialize in custom digital solutions, digital platforms,
            automation, data intelligence, and smart service systems for businesses,
            institutions, and governments.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <Image
              src="/logo.png" // Assuming logo.png is the logo for Technology Service Creater
              alt="Technology Service Creater Logo"
              width={100}
              height={100}
            />
            <div>
              <h2 className="text-2xl font-bold text-[#007BFF]">TECHNOLOGY</h2>
              <h2 className="text-2xl font-bold text-[#007BFF]">SERVICE CREATER</h2>
              <p className="text-sm text-gray-600">-POWERED BY TWC</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;