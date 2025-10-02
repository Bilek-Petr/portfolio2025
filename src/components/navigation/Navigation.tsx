'use client';

import { useState } from 'react';
import { NavigationContent } from './NavigationContent';
import { NavigationToggle } from './NavigationToggle';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {isMobile && (
        <NavigationToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      )}
      <nav className={styles.nav} data-state={isOpen ? 'open' : 'closed'}>
        <NavigationContent onItemClick={() => setIsOpen(false)} />
      </nav>
    </>
  );
};
