import Image from "next/image";
import ApplyNow from "@/components/common/ApplyNow";

const DigitalTransformation = ({
  title,
  desc,
  img1,
  img1title,
  img1desc,
  img2,
  img2title,
  img2desc,
  img3,
  img3title,
  img3desc,
  img4,
  img4title,
  img4desc,
  img5,
  img5title,
  img5desc,
  img6,
  img6title,
  img6desc,
  applytitle,
}: {
  title: string;
  desc: string;
  img1: string;
  img1title: string;
  img1desc: string;
  img2: string;
  img2title: string;
  img2desc: string;
  img3: string;
  img3title: string;
  img3desc: string;
  img4: string;
  img4title: string;
  img4desc: string;
  img5: string;
  img5title: string;
  img5desc: string;
  img6: string;
  img6title: string;
  img6desc: string;
  applytitle: string;
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 text-black">
        <h1 className="text-3xl font-bold text-left mb-4">{title}</h1>
        <p className="text-left text-base mb-12 mx-auto">{desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col text-left">
            <Image
              src={img1}
              alt={img1title}
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl text-left font-semibold mb-2">
              {img1title}
            </h3>
            <p className="text-sm">{img1desc}</p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src={img2}
              alt={img2title}
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{img2title}</h3>
            <p className="text-sm">{img2desc}</p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src={img3}
              alt={img3title}
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{img3title}</h3>
            <p className="text-sm">{img3desc}</p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src={img4}
              alt={img4title}
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{img4title}</h3>
            <p className="text-sm">{img4desc}</p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src={img5}
              alt={img5title}
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{img5title}</h3>
            <p className="text-sm">{img5desc}</p>
          </div>
          <div className="flex flex-col text-left">
            <Image
              src={img6}
              alt={img6title}
              width={0}
              height={0}
              sizes="100vw"
              className="mb-4 w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{img6title}</h3>
            <p className="text-sm">{img6desc}</p>
          </div>
        </div>

        <hr className="py-10 w-[80%]" />

        <ApplyNow title={applytitle} />
      </div>
    </section>
  );
};

export default DigitalTransformation;
