import { Button, Logo } from '@/components';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles['header-logo-wrapper']}>
        <Button text="Skip" buttonVariant="text"></Button>
      </div>
    </header>
  );
};
