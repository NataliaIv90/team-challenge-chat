import {
  CarouselCard,
  TCarouselCardData,
} from '@/components/carouselCard/CarouselCard';
import Img1 from '@/assets/img/carousel-img/0.png';
import Img2 from '@/assets/img/carousel-img/1.png';
import Img3 from '@/assets/img/carousel-img/2.png';

const carouselCardsData: TCarouselCardData[] = [
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

export const Carousel = () => {
  return (
    <section>
      {carouselCardsData.map((el, index) => (
        <CarouselCard data={el} key={index} />
      ))}
    </section>
  );
};
