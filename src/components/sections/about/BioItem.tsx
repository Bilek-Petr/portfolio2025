import React from 'react';
import { AboutBio } from '@/types';
import styles from './about.module.scss';

interface BioItemProps {
  bioInfo: AboutBio;
}

export default function BioItem({ bioInfo }: BioItemProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[clamp(2.5rem,2.5vw,3rem)] font-bold uppercase leading-none tracking-tighter text-gradient">
          {bioInfo.amount}
        </span>
        <span className="italic font-bold leading-5 text-base-sm md:w-1/3">
          {bioInfo.unit}
        </span>
      </div>
      <p
        className={`${styles.highlight} text-base-sm`}
        dangerouslySetInnerHTML={{ __html: bioInfo.description }}
      />
    </div>
  );
}
