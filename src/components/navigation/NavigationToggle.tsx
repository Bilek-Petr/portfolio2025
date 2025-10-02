import { Menu, X } from 'lucide-react';

interface NavigationToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const NavigationToggle = ({
  isOpen,
  onClick,
}: NavigationToggleProps) => {
  return (
    <button
      className="fixed right-4 top-4 z-50 rounded-lg bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
      onClick={onClick}
      aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};
