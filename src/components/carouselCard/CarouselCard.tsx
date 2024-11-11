import { FunctionComponent } from 'react';
import styles from './CarouselCard.module.scss';

export type TCarouselCardData = {
  Img: string;
  text: string;
  title: string;
};

type TCardData = {
  data: TCarouselCardData;
};

export const CarouselCard: FunctionComponent<TCardData> = ({ data }) => {
  const { Img, text, title } = data;
  return (
    <article className={styles['carousel-card']}>
      <div className={styles['carousel-img-container']}>
        <img src={Img} alt="Carousel img" className={styles['carousel-img']} />
      </div>
      <h2 className={styles['carousel-title']}>{title}</h2>
      <p className={styles['carousel-text']}>{text}</p>
    </article>
  );
};
