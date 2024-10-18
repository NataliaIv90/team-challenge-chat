import { FunctionComponent } from 'react';

import CloseIcon from '@icons/icon-back.svg';
import { IconButton } from '../buttons/iconButton/IconButton';
import SearchIcon from '@icons/icon-search.svg';
import { TInputProps } from '@/types/components';

import styles from './Input.module.scss';

export const Input: FunctionComponent<TInputProps> = ({
  type = 'text',
  value,
  placeholder,
  label,
  supportiveText,
  error,
  searchIcon,
  closeBtn,
  id,
  disabled = false,
  onInpChange,
  closeBtnOnClick,
}) => {
  const labelClassName = error ? `${styles['label']} ${styles['error']}` : styles['label'];

  const inpWrapperClassname = [
    styles['inp-wrapper'],
    `${error ? styles['error'] : ''}`,
    `${disabled ? styles['disabled'] : ''}`,
    ,
  ]
    .filter((el) => el && el.length)
    .join(' ');

  const inpStyles = [
    styles['inp'],
    `${searchIcon ? styles['padding-left'] : ''}`,
    `${error ? styles['error'] : ''}`,
    `${closeBtn ? styles['padding-right'] : ''}`
  ]
    .filter((el) => el && el.length)
    .join(' ');

  return (
    <div>
      {label ? <label htmlFor={id} className={labelClassName}>{label}</label> : null}
      <div className={inpWrapperClassname}>
        {searchIcon
          ? (
            <SearchIcon
              className={styles['icon']}
              width={24}
              height={24}
            />
          ) : null}
        <input
          disabled={disabled}
          type={type}
          id={id}
          value={value}
          onChange={onInpChange}
          placeholder={placeholder}
          className={inpStyles}
        />
        {closeBtn ? (
          <IconButton
            icon={CloseIcon}
            buttonVariant="standart"
            isSmall={true}
            onClick={closeBtnOnClick}
            className={styles['close-btn']}
            disabled={disabled}
          />
        ) : null}
      </div>
      {error || supportiveText
        ? <p className={labelClassName}>{error || supportiveText}</p>
        : null
      }
    </div>
  );
};
