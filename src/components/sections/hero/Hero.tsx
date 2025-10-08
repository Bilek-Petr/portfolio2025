'use client';
import React from 'react';
import heroData from '@/data/hero.json';
import { HeroData } from '@/types';
import HeroContent from '@/components/sections/hero/HeroContent';
import HeroImage from '@/components/sections/hero/HeroImage';

const typedHeroData: HeroData = heroData as HeroData;

export default function Hero() {
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
    <section
      id="hero"
      className="container flex min-h-screen flex-col items-center justify-center gap-[clamp(2rem,6vw,7rem)] text-center lg:flex-row"
    >
      <HeroContent
        title={title}
        name={name}
        occupation={occupation}
        subtitle={subtitle}
        btnText={btnText}
        btnLink={btnLink}
      />
      <HeroImage profileImage={profileImage} profileAlt={profileAlt} />
    </section>
  );
}
