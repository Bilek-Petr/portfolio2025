import React from 'react';

interface SectionTitleProps {
  preheadline: string;
  headline: string;
  variant?: 'light' | 'dark';
}

export default function SectionTitle({
  preheadline,
  headline,
  variant = 'dark',
}: SectionTitleProps) {
  return (
    <div
      className={`leading-6 lg:leading-9 ${variant === 'dark' ? 'text-accent' : 'text-light'}`}
      aria-label={headline}
    >
      <span className="italic font-light text-base-md">{preheadline}</span>
      <h2 className="font-bold uppercase text-header-md">{headline}</h2>
    </div>
  );
}
