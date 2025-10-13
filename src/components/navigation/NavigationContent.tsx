import Link from 'next/link';
import navigationData from '@/data/navigation.json';
import { NavigationList } from './NavigationList';
import { NavigationSocial } from './NavigationSocial';
import { NavigationData } from '@/types';
import { useActiveSection } from '@/hooks/useActiveSection';

interface NavigationContentProps {
  onItemClick?: () => void;
  isOpen?: boolean;
}

export const NavigationContent = ({ onItemClick }: NavigationContentProps) => {
  const { logo, menuItems, socialIcons } = navigationData as NavigationData;

  // Extract section IDs and use the hook
  const sectionIds = menuItems.map((item) => item.url.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  return (
    <div
      className="flex flex-col h-full gap-12 p-12 md:gap-24"
      style={{ zIndex: 50, position: 'relative' }}
    >
      <div>
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter transition-colors duration-300 text-light hover:text-gradient-middle"
          onClick={onItemClick}
        >
          {logo}
        </Link>
      </div>

      <NavigationList
        items={menuItems}
        activeSection={activeSection}
        onItemClick={onItemClick}
      />
      <NavigationSocial icons={socialIcons} />
    </div>
  );
};
