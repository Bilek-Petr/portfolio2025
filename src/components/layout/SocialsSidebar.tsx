import React from 'react';
import { IconCircle } from '../ui/iconCircle/IconCircle';
import navigationData from '@/data/navigation.json';

export default function SocialsSidebar() {
  const { socialIcons } = navigationData;

  return (
    <aside className="sticky top-0 mr-6 hidden h-screen lg:flex">
      <ul className="flex flex-col justify-center gap-5 after:relative after:bottom-0 after:left-1/2 after:h-32 after:w-[2px] after:-translate-x-1/2 after:transform after:bg-gray-200 after:content-['']">
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <IconCircle
              icon={icon.src}
              href={icon.url}
              alt={icon.alt}
              size="md"
              variant="lightBordered"
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
