import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ToolItem as ToolItemType } from '@/types';
import { useMousePosition } from '@/hooks/useMousePosition';
import styles from './toolItem.module.scss';

interface ToolItemProps {
  tool: ToolItemType;
}

export default function ToolItem({ tool }: ToolItemProps) {
  const textId = `curve-${tool.name.replace(/\s+/g, '-')}`;
  const {
    textOffset,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useMousePosition();

  return (
    <div className={`flex flex-col items-center ${styles.toolContainer}`}>
      <svg viewBox="0 0 200 80" className="w-full max-w-[90px]">
        <defs>
          <path id={textId} d="M 20,65 Q 100,25 180,65" fill="transparent" />
        </defs>
        <text
          className="fill-current text-[1.8rem] font-medium uppercase text-light"
          fontSize="24"
        >
          <textPath href={`#${textId}`} startOffset="50%" textAnchor="middle">
            {tool.name}
          </textPath>
        </text>
      </svg>

      {/* The circle with a tool icon */}
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-full p-4 bg-glassmorphism md:h-24 md:w-24 ${styles.iconCircle}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative w-16 h-16"
          animate={{
            x: isHovering ? textOffset.x : 0,
            y: isHovering ? textOffset.y : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <Image
            src={tool.icon}
            alt={tool.name}
            fill
            className="object-contain brightness-0 invert"
          />
        </motion.div>
      </div>
    </div>
  );
}
