import React from 'react';
import styles from './quoteBlock.module.scss';

interface QuoteBlockProps {
  quote: string;
}

export default function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <div className="mt-10 text-center bg-accent/90">
      <blockquote>
        <p className="relative py-5 italic font-medium text-base-sm text-light">
          <span className={styles.quoteBlock}>"{quote}"</span>
        </p>
      </blockquote>
    </div>
  );
}
