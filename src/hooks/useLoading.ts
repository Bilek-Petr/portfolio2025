import { useState } from 'react';

export const useLoading = (minLoadingTime = 3000) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return { isLoading, handleLoadingComplete };
};
