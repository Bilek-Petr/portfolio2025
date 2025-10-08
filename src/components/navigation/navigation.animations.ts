import { Variants } from 'framer-motion';

export const navigationVariants: Variants = {
  open: {
    x: 0,
    borderRadius: '0px',
    transition: {
      duration: 0.4,
      ease: [0.75, 0, 1, 1],
    },
  },
  closed: {
    x: '-100%',
    borderRadius: '0px 100% 100% 0px',
    transition: {
      duration: 0.4,
      ease: [0.75, 0, 1, 1],
    },
  },
};

export const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.8 },
};
