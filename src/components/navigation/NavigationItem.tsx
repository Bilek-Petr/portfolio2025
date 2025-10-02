import Link from 'next/link';
import { NavigationMenuItem } from '@/types';

interface NavigationItemProps extends NavigationMenuItem {
  onClick?: () => void;
}

export const NavigationItem = ({
  url,
  label,
  onClick,
}: NavigationItemProps) => {
  return (
    <li>
      <Link
        href={url}
        className="text-lg transition-colors hover:text-primary"
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};
