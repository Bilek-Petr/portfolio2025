'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationContent } from '@/components/navigation/NavigationContent';
import { NavigationToggle } from '@/components/navigation/NavigationToggle';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { navigationVariants, overlayVariants } from './navigation.animations';
import styles from '@/components/navigation/Navigation.module.scss';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isTabletSize = useMediaQuery('(max-width: 1279px)');

  return (
    <>
      <NavigationToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 hidden bg-black/20 md:block xl:hidden"
            onClick={() => setIsOpen(false)}
            style={{ zIndex: 40 }}
            {...overlayVariants}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.nav
          className={styles.nav}
          initial="closed"
          animate={isOpen || !isTabletSize ? 'open' : 'closed'}
          exit="closed"
          variants={navigationVariants}
          style={{
            willChange: 'clip-path, border-radius',
            translateZ: 0,
            zIndex: 40,
          }}
        >
          <NavigationContent
            onItemClick={() => setIsOpen(false)}
            isOpen={isOpen}
          />
        </motion.nav>
      </AnimatePresence>
    </>
  );
};
