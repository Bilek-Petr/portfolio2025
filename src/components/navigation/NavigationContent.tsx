import Link from 'next/link';
import navigationData from '@/data/navigation.json';
import { NavigationList } from './NavigationList';
import { NavigationSocial } from './NavigationSocial';
import { NavigationData } from '@/types';

interface NavigationContentProps {
  onItemClick?: () => void;
}
export const NavigationContent = ({ onItemClick }: NavigationContentProps) => {
  const { logo, menuItems, socialIcons } = navigationData as NavigationData;

  return (
    <div className="flex h-full flex-col gap-24 p-12">
      <div>
        <Link href="/" className="text-2xl font-bold" onClick={onItemClick}>
          {logo}
        </Link>
      </div>

      <NavigationList items={menuItems} onItemClick={onItemClick} />
      <NavigationSocial icons={socialIcons} />
    </div>
  );
};
