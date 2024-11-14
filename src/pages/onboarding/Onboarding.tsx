import { CarouselProvider } from '../../utils/context/CarouselContext';
import { Carousel } from './carousel/Carousel';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

export const Onboarding = () => {
  return (
    <CarouselProvider>
      <div className="onboarding">
        <Header />
        <Carousel />
        <Footer />
      </div>
    </CarouselProvider>
  );
};
