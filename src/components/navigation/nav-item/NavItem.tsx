import { FunctionComponent } from 'react';

import LoadingIcon from '@icons/icon-loading.svg';
import { TNavItemProps } from '@/types/components';

import styles from './NavItem.module.scss';

export const NavItem: FunctionComponent<TNavItemProps> = ({
  icon: Icon,
  isLoading = false,
  onClick,
  showText,
  selected,
  text,
}): JSX.Element => {
  const navItemClassname = `
    ${styles['nav-item__btn']} 
    ${selected ? styles['selected'] : ''}
    ${showText ? '' : styles['nav-item__narrow']}
  `;
  const navIconClassName = styles['nav-item__icon'];

  return (
    <>
      <button onClick={onClick} className={navItemClassname}>
        {isLoading ? (
          <LoadingIcon className={navIconClassName} width={28} height={28} />
        ) : (
          <Icon width={28} height={28} className={navIconClassName} />
        )}
        {showText ? <span>{text}</span> : null}
      </button>
    </>
  );
};
