import Image from "next/image";

const HomeMissionSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#F8F6F9] to-[#EDE7F0] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#03CF65] mb-8">
          Mission Digital Maharashtra 2027
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          The Digital Maharashtra 2027 Mission is a visionary movement by TWC
          Organization to transform India into a fully digital nation. We
          believe that Maharashtra will act as the launchpad to execute this
          mission and scale its success across the country.
        </p>

        <h3 className="text-4xl font-bold text-[#03CF65] mb-12">
          Bharat&apos;s Digital Future Begins Here...!
        </h3>
        <p className="text-gray-700 max-w-4xl mx-auto mb-16">
          A national-level vision that starts from Maharashtra. The Digital
          Maharashtra 2027 Mission, launched by TWC Organization, is designed to
          drive a multi-tech revolution that will empower every citizen as a
          digital user, foster innovation, and accelerate the creation of
          Digital Bharat. Maharashtra will act as the launchpad and execution
          hub for this mission, setting an example for the entire country.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/MHHD.png"
              alt="Viksit Maharashtra 2047"
              width={350}
              height={350}
              className="object-contain mb-4"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/LogoHD.png"
              alt="Digital Maharashtra 2027"
              width={350}
              height={350}
              className="object-contain mb-4"
            />
          </div>
        </div>

        <h3 className="text-4xl font-bold text-[#03CF65] mb-8">
          Towards Collaboration with Viksit Maharashtra 2047
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Digital Maharashtra 2027 is moving forward to collaborate with the
          Viksit Maharashtra 2047 initiative. Together, we aim to align our
          vision of building a digitally empowered, globally connected, and
          future-ready Maharashtra.
        </p>
      </div>
    </section>
  );
};

export default HomeMissionSection;
