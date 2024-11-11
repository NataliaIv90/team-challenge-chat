import { FunctionComponent } from 'react';

import LoadingIcon from '@icons/icon-loading.svg';
import { TButtonProps } from '@/types/components';

import styles from './Button.module.scss';

export const Button: FunctionComponent<TButtonProps> = ({
  text,
  type = 'button',
  disabled,
  icon: Icon,
  className,
  buttonVariant,
  buttonSize,
  isLoading = false,
  onClick,
  fullWidth = false,
}) => {
  const classNameValue = [
    styles.btn,
    className,
    styles[buttonVariant],
    `${buttonSize ? styles[buttonSize] : ''}`,
    `${fullWidth ? styles['wide'] : ''}`,
  ]
    .filter((el) => el && el.length)
    .join(' ');

  const btnIconClassNameValues = `${styles['btn-icon']} ${styles[`btn-icon-${buttonSize}`]} ${styles[`btn-icon-${buttonVariant}`]}`;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNameValue}
      type={type}
    >
      {isLoading ? (
        <LoadingIcon className={btnIconClassNameValues} />
      ) : Icon ? (
        <Icon className={btnIconClassNameValues} />
      ) : null}
      <span>{text}</span>
    </button>
  );
};
