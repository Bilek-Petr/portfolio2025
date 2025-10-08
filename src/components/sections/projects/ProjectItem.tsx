import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ProjectItem } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';
import {
  cursorStyle,
  cursorAnimation,
  cursorTransition,
  viewTextAnimation,
  viewTextTransition,
} from './projectItem.animations';

interface ProjectItemProps {
  item: ProjectItem;
}

export default function ProjectItem({ item }: ProjectItemProps) {
  const {
    cursorPosition,
    textOffset,
    isHovering,
    isPressed,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseDown,
    handleMouseUp,
  } = useMousePosition();

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <article className="flex gap-6 space-between">
        <header className="flex flex-col justify-between max-w-56">
          <div>
            <span className="italic font-medium text-base-md">
              {item.type} Project
            </span>
            <h3 className="font-bold text-header-sm">{item.title}</h3>
          </div>
          <ArrowUpRight className="h-[clamp(2.5rem,5vw,4rem)] w-[clamp(2.5rem,5vw,4rem)]" />
        </header>
        <figure className="flex-1">
          <Image src={item.image} alt={item.title} width={315} height={250} />
        </figure>
      </article>

      <motion.div
        className="absolute flex items-center justify-center pointer-events-none"
        style={cursorStyle}
        initial={{ opacity: 0, scale: 0 }}
        animate={cursorAnimation(cursorPosition, isHovering, isPressed)}
        transition={cursorTransition}
      >
        <div className="flex items-center justify-center w-full h-full rounded-full bg-gradient-middle/90 backdrop-blur-sm">
          <motion.span
            className="text-sm font-semibold text-white"
            animate={viewTextAnimation(textOffset, isPressed)}
            transition={viewTextTransition}
          >
            VIEW
          </motion.span>
        </div>
      </motion.div>
    </a>
  );
}
