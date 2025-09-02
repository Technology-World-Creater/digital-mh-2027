import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  bgImage: string;
}

const ContactUsHero: React.FC<HeroSectionProps> = ({ title, bgImage }) => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <Image
        src={bgImage}
        alt="Background Image"
        fill
        sizes="100vw"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-center">
        <h1 className="text-5xl font-bold">{title}</h1>
      </div>
    </section>
  );
};

export default ContactUsHero;