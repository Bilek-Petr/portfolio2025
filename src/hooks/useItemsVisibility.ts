import { useState } from 'react';

export function useItemsVisibility(
  initialCount: number,
  totalCount: number,
  exitDuration: number
) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const toggle = () => {
    if (visibleCount > initialCount) {
      setIsCollapsing(true);
      setTimeout(() => {
        setVisibleCount(initialCount);
        setIsCollapsing(false);
      }, exitDuration);
    } else {
      setVisibleCount(totalCount);
    }
  };

  return { visibleCount, isCollapsing, toggle };
}
