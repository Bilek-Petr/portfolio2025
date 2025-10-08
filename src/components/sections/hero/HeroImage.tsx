'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

interface HeroImageProps {
  profileImage: string;
  profileAlt: string;
}

export default function HeroImage({
  profileImage,
  profileAlt,
}: HeroImageProps) {
  const {
    cursorPosition,
    textOffset,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useMousePosition();

  return (
    <div
      className="relative w-full max-w-[500px] cursor-none lg:max-w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          x: textOffset.x,
          y: textOffset.y,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
        }}
      >
        <Image src={profileImage} width={1350} height={1425} alt={profileAlt} />
      </motion.div>

      {isHovering && (
        <motion.div
          className="absolute z-50 w-4 h-4 rounded-full pointer-events-none bg-white/50"
          style={{
            left: cursorPosition.x - 8,
            top: cursorPosition.y - 8,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
    </div>
  );
}
