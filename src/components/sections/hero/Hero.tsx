'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import heroData from '@/data/hero.json';
import { HeroData } from '@/types';
import HeroContent from '@/components/sections/hero/HeroContent';
import HeroImage from '@/components/sections/hero/HeroImage';

const typedHeroData: HeroData = heroData as HeroData;

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

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
    <motion.section
      id="hero"
      className="container flex min-h-screen flex-col items-center justify-center gap-[clamp(2rem,6vw,7rem)] text-center lg:flex-row"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
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
    </motion.section>
  );
}
