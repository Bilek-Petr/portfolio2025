import { motion, AnimatePresence, Variants, easeInOut } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingAnimation = ({ onComplete }: { onComplete?: () => void }) => {
  const greetings = [
    'Hello',
    'Hei',
    'Hallo',
    'Hola',
    '你好',
    'こんにちは',
    'Ciao',
    'Bonjour',
    'Cześć',
    'Ahoj.',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const getDelayForIndex = (index: number) => {
      const totalItems = greetings.length;

      if (index === 0 || index === totalItems - 1) return 500; // First and last items stay longer

      // Middle items go faster
      return 100 + index * 10;
    };

    const scheduleNext = (index: number) => {
      const delay = getDelayForIndex(index);

      setTimeout(() => {
        if (index < greetings.length - 1) {
          setCurrentIndex(index + 1);
          scheduleNext(index + 1);
        } else {
          // After last item delay, start exit animation
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete?.();
            }, 800);
          }, 300);
        }
      }, delay);
    };

    // Start the sequence
    scheduleNext(0);
  }, [onComplete, greetings.length]);

  const containerVariants: Variants = {
    initial: {
      x: 0,
      borderRadius: '0px',
    },
    exit: {
      x: '100%',
      borderRadius: '800px',

      transition: {
        x: { duration: 0.5, ease: easeInOut },
        borderRadius: { duration: 0.65, ease: easeInOut },
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-accent"
        variants={containerVariants}
        initial="initial"
        animate={isComplete ? 'exit' : 'initial'}
        onAnimationComplete={() => {
          if (isComplete) {
            onComplete?.();
          }
        }}
      >
        <div className="text-center">
          <motion.h1
            key={currentIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="text-4xl text-light md:text-6xl"
          >
            {greetings[currentIndex]}
          </motion.h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;
