import { FunctionComponent } from 'react';

import { TFABbtnProps } from '@/types/button';

import styles from './FABbtn.module.scss';

export const FABbtn: FunctionComponent<TFABbtnProps> = ({
  type = 'button',
  disabled,
  icon: Icon,
  className,
  onClick,
}) => {
  const classNameValue = [styles['fab-btn'], className]
    .filter((el) => el && el.length)
    .join(' ');

  const btnIconClassNameValues = `${styles['fab__icon']}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNameValue}
      type={type}
    >
      <Icon width={24} height={24} className={btnIconClassNameValues} />
    </button>
  );
};
