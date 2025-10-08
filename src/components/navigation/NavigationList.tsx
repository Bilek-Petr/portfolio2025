import { NavigationItem } from './NavigationItem';
import { NavigationMenuItem } from '@/types';

interface NavigationListProps {
  items: NavigationMenuItem[];
  activeSection?: string;
  onItemClick?: () => void;
}

export const NavigationList = ({
  items,
  activeSection,
  onItemClick,
}: NavigationListProps) => {
  return (
    <nav className="flex-1">
      <ul className="space-y-6">
        {items.map((item) => (
          <NavigationItem
            key={item.label}
            url={item.url}
            label={item.label}
            isActive={activeSection === item.url.replace('#', '')}
            onClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  );
};
