import React from 'react';
import Image from 'next/image';
import { ToolItem as ToolItemType } from '@/types';
import styles from './toolItem.module.scss';

interface ToolItemProps {
  tool: ToolItemType;
}

export default function ToolItem({ tool }: ToolItemProps) {
  const textId = `curve-${tool.name.replace(/\s+/g, '-')}`;

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

      {/* Icon Circle */}
      <div
        className={`bg-glassmorphism flex h-20 w-20 items-center justify-center rounded-full p-4 md:h-24 md:w-24 ${styles.iconCircle}`}
      >
        <div className="relative w-16 h-16">
          <Image
            src={tool.icon}
            alt={tool.name}
            fill
            className="object-contain brightness-0 invert"
          />
        </div>
      </div>
    </div>
  );
}
