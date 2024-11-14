import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CarouselContextType {
  checkedIndex: number;
  setCheckedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

export const CarouselProvider = ({ children }: { children: ReactNode }) => {
  const [checkedIndex, setCheckedIndex] = useState(0);

  return (
    <CarouselContext.Provider value={{ checkedIndex, setCheckedIndex }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
};
