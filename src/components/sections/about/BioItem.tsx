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
        <span className="font-bold leading-none tracking-tighter uppercase text-header-md text-gradient">
          {bioInfo.amount}
        </span>
        <span className="w-1/3 italic font-bold leading-5 text-base-sm">
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
