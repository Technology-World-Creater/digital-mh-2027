import Image from "next/image";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/Herobg.jpg"
        alt="Digital Maharashtra 2027 Background"
        fill
        className="object-cover z-0"
      />

      <div className="relative z-30 text-center text-white p-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <Image
            src="/LogoHD.png"
            alt="Digital Maharashtra 2027 Logo"
            width={1100}
            height={1100}
            className="w-full max-w-xl -mt-20 md:mt-0 md:max-w-xl lg:max-w-3xl xl:max-w-4xl mb-4"
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col w-fit md:w-full md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <Link
              href="https://forms.gle/d4XzUwYmES4hitjU7"
              target="_blank"
              className="bg-[#03CF65] text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-[#04984c] transition duration-300"
            >
              <span>Register Now</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link
              href="https://forms.gle/KzBEwPnsgqhvGqef7"
              target="_blank"
              className="border border-black text-black px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-white/90 hover:text-black transition duration-300"
            >
              <span>Join the Mission</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
