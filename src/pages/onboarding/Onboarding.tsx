import { CarouselProvider } from '../../utils/context/CarouselContext';
import { Carousel } from './carousel/Carousel';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

export const Onboarding = () => {
  return (
    <CarouselProvider>
      <Header />
      <Carousel />
      <Footer />
    </CarouselProvider>
  );
};
