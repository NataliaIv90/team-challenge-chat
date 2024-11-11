import LogoImg from '../../assets/img/logo/logo.svg';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <>
      <LogoImg className={styles['logo-narrow']} />
    </>
  );
};
