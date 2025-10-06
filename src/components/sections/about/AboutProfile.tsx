import React from 'react';
import Image from 'next/image';
import styles from './about.module.scss';

interface AboutProfileProps {
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
}

export default function AboutProfile({
  name,
  tagline,
  image,
  imageAlt,
}: AboutProfileProps) {
  return (
    <div className="text-center">
      <Image src={image} alt={imageAlt} width="430" height="410" className="" />
      <div className="py-3 md:py-5">
        <h3 className="mb-2 font-bold leading-none tracking-tighter uppercase text-header-md text-gradient">
          {name}
        </h3>
        <span
          className={`${styles.highlight} text-[clamp(1rem,2vw,1.25rem)] italic`}
          dangerouslySetInnerHTML={{ __html: tagline }}
        />
      </div>
    </div>
  );
}
