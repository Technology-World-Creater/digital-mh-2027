import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const GetInvolvedHero: React.FC<HeroSectionProps> = ({ title, subtitle, bgImage }) => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <Image
        src={bgImage}
        alt="Background Image"
        fill
        sizes="100vw"
        quality={100}
        className="absolute inset-0 z-0 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
};

export default GetInvolvedHero;