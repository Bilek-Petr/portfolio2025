import React from 'react';
import Image from 'next/image';
import heroData from '@/data/hero.json';
import { HeroData } from '@/types';

// Type check the imported JSON data
const typedHeroData: HeroData = heroData as HeroData;

// Add FC type for the functional component
const Hero: React.FC = () => {
  const {
    title,
    name,
    occupation,
    subtitle,
    btnText,
    btnLink,
    profileImage,
    profileAlt,
  } = typedHeroData;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-[clamp(2rem,6vw,7rem)] p-6 text-center lg:flex-row">
      <div className="flex flex-col items-center gap-10 pt-20 lg:items-start lg:pt-0 lg:text-left">
        <h1 className="text-[clamp(2.75rem,6.5vw,6.75rem)] uppercase leading-none">
          {title} <span className="font-bold">{name}</span>
        </h1>
        <h2 className="text-[clamp(1.325rem,2.5vw,2rem)] italic">
          <span className="font-bold">{occupation}</span>{' '}
          <span className="xs:inline hidden">|</span>{' '}
          <span className="font-light">{subtitle}</span>
        </h2>
        <button className="bg-accent px-4 py-2 text-white">{btnText}</button>
      </div>

      <div className="w-3/4 lg:w-full">
        <Image src={profileImage} width={1350} height={1425} alt={profileAlt} />
      </div>
    </section>
  );
};

export default Hero;
