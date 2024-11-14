// import { useEffect } from 'react';

import { Button, CarouselCard } from '@/components';
import { TCarouselCardData } from '@/types/components';
import { useCarousel } from '@/utils/context';
import { useSwipe } from '@/utils/hooks';

import Img1 from '@/assets/img/carousel-img/0.png';
import Img2 from '@/assets/img/carousel-img/1.png';
import Img3 from '@/assets/img/carousel-img/2.png';
import styles from './Carousel.module.scss';

const carouselCardsData: Omit<TCarouselCardData, 'active'>[] = [
  {
    Img: Img1,
    title: 'Welcome to Chatly!',
    text: 'Start chatting with just a username — no personal info required',
  },
  {
    Img: Img2,
    title: 'Chat anonymously',
    text: 'Join discussions on any topic while keeping your privacy intact',
  },
  {
    Img: Img3,
    title: 'Tailor your chats',
    text: 'Create your own chats or find groups that fit your interests easily',
  },
];

export const Carousel = (/*{ intervalDuration = 5000 }*/) => {
  const { checkedIndex, setCheckedIndex } = useCarousel();

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(
    carouselCardsData.length,
    setCheckedIndex
  );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCheckedIndex(
  //       (prevIndex) => (prevIndex + 1) % carouselCardsData.length
  //     );
  //   }, intervalDuration);

  //   return () => clearInterval(interval);
  // }, [setCheckedIndex, intervalDuration]);

  return (
    <section
      className={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      {carouselCardsData.map((el, index) => (
        <CarouselCard
          key={index}
          data={{ ...el, active: index === checkedIndex }}
        />
      ))}
      <div className={styles['carousel-skipbtn-wrapper']}>
        <Button text="Next" buttonVariant="primary" fullWidth={true} />
      </div>
    </section>
  );
};
