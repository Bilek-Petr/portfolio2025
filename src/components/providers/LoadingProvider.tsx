'use client';

import { AnimatePresence } from 'framer-motion';
import LoadingAnimation from '@/components/shared/animations/LoadingAnimation';
import { useLoading } from '@/hooks/useLoading';

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, handleLoadingComplete } = useLoading(3000);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && children}
    </>
  );
}
