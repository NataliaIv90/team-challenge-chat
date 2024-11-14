import { FunctionComponent } from 'react';

import { setClassnameData } from '@/utils';
import { TCardData } from '@/types/components';

import styles from './CarouselCard.module.scss';

export const CarouselCard: FunctionComponent<TCardData> = ({ data }) => {
  const { Img, text, title, active } = data;
  const articleStyles = setClassnameData([
    styles['carousel-card'],
    `${active ? styles['active'] : ''}`,
  ]);
  return (
    <article className={articleStyles}>
      <div className={styles['carousel-img-container']}>
        <img src={Img} alt="Carousel img" className={styles['carousel-img']} />
      </div>
      <h2 className={styles['carousel-title']}>{title}</h2>
      <p className={styles['carousel-text']}>{text}</p>
    </article>
  );
};
