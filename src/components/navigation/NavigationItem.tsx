import Link from 'next/link';
import { NavigationMenuItem } from '@/types';
import { motion } from 'framer-motion';

interface NavigationItemProps extends NavigationMenuItem {
  isActive?: boolean;
  onClick?: () => void;
}

export const NavigationItem = ({
  url,
  label,
  isActive,
  onClick,
}: NavigationItemProps) => {
  return (
    <li className="relative">
      {/* Active indicator dot */}
      <motion.div
        className="absolute left-[-1rem] top-1 h-full w-1 -translate-y-1/2 bg-gradient-custom md:h-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />

      <Link
        href={url}
        className="group relative block overflow-hidden text-[clamp(1.5rem,5vw,2rem)] md:text-base-md"
        onClick={onClick}
      >
        <div className="relative h-[1.5em] overflow-hidden">
          <motion.div
            className="relative flex flex-col items-start"
            whileHover={{ y: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <span className="block">{label}</span>
            <span className="block text-gradient">{label}</span>
          </motion.div>
        </div>
      </Link>
    </li>
  );
};
