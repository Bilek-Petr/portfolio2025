'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { IconCircle } from '../ui/iconCircle/IconCircle';
import navigationData from '@/data/navigation.json';

const iconVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export default function SocialsSidebar() {
  const { socialIcons } = navigationData;

  return (
    <aside className="sticky top-0 hidden h-screen mx-6 lg:flex">
      <ul className="flex flex-col justify-center gap-5 after:relative after:bottom-0 after:left-1/2 after:h-32 after:w-[2px] after:-translate-x-1/2 after:transform after:bg-gray-200 after:content-['']">
        {socialIcons.map((icon, index) => (
          <motion.li
            key={index}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.75 + index * 0.15,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            <IconCircle
              icon={icon.src}
              href={icon.url}
              alt={icon.alt}
              size="md"
              variant="lightBordered"
            />
          </motion.li>
        ))}
      </ul>
    </aside>
  );
}
