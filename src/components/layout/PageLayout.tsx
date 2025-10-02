import { Navigation } from '@/components/navigation/Navigation';
import SocialsSidebar from '@/components/layout/SocialsSidebar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      <main className="flex-1">{children}</main>
      <SocialsSidebar />
    </div>
  );
}
