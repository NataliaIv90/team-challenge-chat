import { FunctionComponent } from 'react';

import LoadingIcon from '@icons/icon-loading.svg';
import { TIconButtonProps } from '@/types/components';

import styles from './IconButton.module.scss';

export const IconButton: FunctionComponent<TIconButtonProps> = ({
  type = 'button',
  icon: Icon,
  disabled,
  className,
  buttonVariant,
  isSmall,
  isLoading = false,
  onClick,
}) => {
  const classNameValue = [
    styles['btn-sqr'],
    className,
    styles[buttonVariant],
    isSmall ? styles['btn-small'] : '',
  ]
    .filter((el) => el && el.length)
    .join(' ');

  const iconClassName = `${styles['btn-icon']} ${isSmall ? styles['btn-icon__small'] : styles['btn-icon__large']}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNameValue}
      type={type}
    >
      {isLoading ? (
        <LoadingIcon className={iconClassName} />
      ) : (
        <Icon className={iconClassName} />
      )}
    </button>
  );
};
