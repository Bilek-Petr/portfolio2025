import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const NavigationToggle = ({
  isOpen,
  onClick,
}: NavigationToggleProps) => {
  return (
    <motion.button
      className="fixed z-50 inline-block p-4 transition-colors rounded-full right-4 top-4 bg-accent text-light xl:hidden"
      onClick={onClick}
      aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      aria-expanded={isOpen}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.85 }}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </motion.button>
  );
};
