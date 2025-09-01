import Image from "next/image";

interface TSCContributionProps {
  title: string;
  description: string;
  sections: {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
  }[];
  mainImageSrc: string;
  mainImageAlt: string;
  logoImageSrc: string;
  logoImageAlt: string;
  logoTitle: string;
}

const TSCContribution: React.FC<TSCContributionProps> = ({
  title,
  description,
  sections,
  mainImageSrc,
  mainImageAlt,
  logoImageSrc,
  logoImageAlt,
  logoTitle,
}) => {
  return (
    <section className="pt-16 pb-0 bg-white">
      <div className="container mx-auto max-w-7xl px-4 text-black">
        <h1 className="text-4xl font-bold mb-20">
          {title} <span className="text-[#03CF65]">{description}</span>
        </h1>

        <div className="flex flex-col lg:flex-row mb-12 gap-10">
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 lg:w-[70%]">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col h-52 text-left p-6 bg-gray-100 rounded-lg shadow-md w-full sm:w-[calc(50%-20px)] lg:w-[calc(50%-20px)]"
              >
                <Image
                  src={section.imageSrc}
                  alt={section.altText}
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-sm font-semibold">{section.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full lg:w-[30%] text-left bg-white rounded-lg shadow-md mt-10 lg:mt-0">
            <Image
              src={mainImageSrc}
              alt={mainImageAlt}
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 h-80 object-cover w-full"
            />
            <h3 className="text-lg px-3 font-semibold mb-2">{logoTitle}</h3>
            <Image
              src={logoImageSrc}
              alt={logoImageAlt}
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 h-full object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TSCContribution;
