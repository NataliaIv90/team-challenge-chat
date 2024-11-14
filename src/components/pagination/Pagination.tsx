import { useCarousel } from '@/utils/context/CarouselContext';
import styles from './Pagination.module.scss';

const paginationBtnsData = [
  'pagination-btn-1',
  'pagination-btn-2',
  'pagination-btn-3',
];

export const Pagination = () => {
  const { checkedIndex, setCheckedIndex } = useCarousel();

  return (
    <form className={styles.pagination}>
      {paginationBtnsData.map((el, index) => (
        <div key={el}>
          <input
            className={styles['pagination-radioBtn']}
            type="radio"
            name="pagination-btn"
            id={el}
            checked={index === checkedIndex}
            onChange={() => setCheckedIndex(index)}
          />
          <label
            htmlFor={el}
            className={index === checkedIndex ? styles.checked : ''}
          ></label>
        </div>
      ))}
    </form>
  );
};
