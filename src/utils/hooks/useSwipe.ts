import { useRef } from 'react';

type SetIndex = (indexUpdater: (prevIndex: number) => number) => void;

export const useSwipe = (length: number, setIndex: SetIndex) => {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setIndex((prevIndex: number) => (prevIndex + 1) % length);
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      setIndex((prevIndex: number) =>
        prevIndex === 0 ? length - 1 : prevIndex - 1
      );
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
