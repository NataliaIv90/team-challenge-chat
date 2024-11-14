import { Button } from '@/components';
import { Pagination } from '@/components/pagination/Pagination';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-skipbtn-wrapper']}>
        <Button text="Skip" buttonVariant="text"></Button>
      </div>
      <div className={styles['footer-next-btn']}>
        <Button text="Next" fullWidth={true} buttonVariant="primary" />
      </div>
      <Pagination />
    </footer>
  );
};
