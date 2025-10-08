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
      <h2 className="italic text-header-sm">
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

      <motion.div
        className="absolute hidden -left-10 -top-5 -z-10 lg:block"
        initial={{ scale: 0.8, rotate: -10, opacity: 0.7 }}
        animate={{
          scale: [1, 0.95, 1, 0.95, 1],
          opacity: [0.9, 0.7, 0.9],
          rotate: [0, 2, -2, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'loop',
        }}
      >
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
