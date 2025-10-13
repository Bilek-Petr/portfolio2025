'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/button/regular/Button';

interface HeroContentProps {
  title: string;
  name: string;
  occupation: string;
  subtitle: string[];
  btnText: string;
  btnLink: string;
}

export default function HeroContent({
  title,
  name,
  occupation,
  subtitle,
  btnText,
  btnLink,
}: HeroContentProps) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitle.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [subtitle.length]);

  return (
    <div className="relative flex flex-col items-center gap-10 pt-32 lg:items-start lg:pt-0 lg:text-left">
      <h1 className="leading-none uppercase text-header-lg">
        {title} <span className="font-bold">{name}</span>
      </h1>
      <h2 className="flex flex-col gap-1 italic text-header-sm xs:flex-row">
        <span className="font-bold">{occupation}</span>{' '}
        <span className="hidden xs:inline">|</span>{' '}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentSubtitleIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className="inline-block font-light"
          >
            {subtitle[currentSubtitleIndex]}
          </motion.span>
        </AnimatePresence>
      </h2>
      <Button href={btnLink} variant="primary" label={btnText} />

      <motion.div className="absolute hidden -z-10 lg:-left-10 lg:-top-5 lg:block">
        <Image
          src="images/hero-shape.svg"
          alt="decorative shape"
          width={200}
          height={110}
        />
      </motion.div>
    </div>
  );
}
