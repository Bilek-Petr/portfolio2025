'use client';
import { useEffect } from 'react';
import { initScrollAnimation } from '@/lib/scrollAnimation';

export default function ClientScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const cleanup = initScrollAnimation();
    return cleanup;
  }, []);

  return <>{children}</>;
}
