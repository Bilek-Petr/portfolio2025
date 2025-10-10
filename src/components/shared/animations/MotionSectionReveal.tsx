import { motion } from 'framer-motion';
import { useState } from 'react';

interface MotionScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function MotionScrollReveal({
  children,
  className,
  id,
}: MotionScrollRevealProps) {
  const [visible, setVisible] = useState(false);

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onViewportEnter={() => setVisible(true)}
      onViewportLeave={() => setVisible(false)}
      viewport={{ amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
}
