import React from 'react';
import styles from './quoteBlock.module.scss';

interface QuoteBlockProps {
  quote: string;
}

export default function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <div className="mt-16 bg-accent/90 text-center">
      <blockquote>
        <p className="relative py-5 text-base-sm font-medium italic text-light">
          <span className={styles.quoteBlock}>&quot;{quote}&quot;</span>
        </p>
      </blockquote>
    </div>
  );
}
