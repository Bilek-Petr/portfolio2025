import React from 'react';
import Image from 'next/image';
import heroData from '@/data/hero.json';
import { HeroData } from '@/types';
import Button from '@/components/ui/button/regular/Button';

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
    <section className="container flex min-h-screen flex-col items-center justify-center gap-[clamp(2rem,6vw,7rem)] p-6 text-center lg:flex-row">
      <div className="relative flex flex-col items-center gap-10 pt-20 lg:items-start lg:pt-0 lg:text-left">
        <h1 className="leading-none uppercase text-header-lg">
          {title} <span className="font-bold">{name}</span>
        </h1>
        <h2 className="italic text-header-sm">
          <span className="font-bold">{occupation}</span>{' '}
          <span className="hidden xs:inline">|</span>{' '}
          <span className="font-light">{subtitle}</span>
        </h2>
        <Button href={btnLink} variant="primary" label={btnText}></Button>
        <div>
          <Image
            src="images/hero-shape.svg"
            alt="decorative shape"
            width={200}
            height={110}
            className="absolute hidden -left-10 -top-5 -z-10 lg:block"
          />
        </div>
      </div>

      <div className="w-full max-w-[500px] md:max-w-full">
        <Image src={profileImage} width={1350} height={1425} alt={profileAlt} />
      </div>
    </section>
  );
};

export default Hero;
