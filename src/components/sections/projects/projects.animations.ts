export const projectAnimations = {
  item: {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.15,
        ease: 'easeOut' as const,
      },
    }),
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.05,
      },
    },
  },
  button: {
    layout: true,
    transition: { duration: 0.325, ease: 'easeInOut' as const },
  },
  exitAnimationDuration: 450,
} as const;
