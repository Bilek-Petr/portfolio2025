import { NavigationItem } from './NavigationItem';
import { NavigationMenuItem } from '@/types';

interface NavigationListProps {
  items: NavigationMenuItem[];
  onItemClick?: () => void;
}

export const NavigationList = ({ items, onItemClick }: NavigationListProps) => {
  return (
    <nav className="flex-1">
      <ul className="space-y-6">
        {items.map((item) => (
          <NavigationItem
            key={item.label}
            url={item.url}
            label={item.label}
            onClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  );
};
