import { JSX, FunctionComponent } from 'react';

import { setClassnameData } from '@/utils/functions/setClassnameData';
import styles from './Avatar.module.scss';
import { avatarImgsData } from '@/assets/data/avatarImgsData';
import { TAvatarProps } from '@/types/components';

export const Avatar: FunctionComponent<TAvatarProps> = ({
  name,
  img,
  selected = false,
  size,
}): JSX.Element => {
  const avatarClassname = setClassnameData([
    'avatar-icon',
    styles['avatar-icon'],
    styles[size],
    `${selected ? styles['selected'] : null}`,
    `${img ? null : styles.text}`,
  ]);

  return (
    <>
      <div className={avatarClassname}>
        {img ? (
          <img
            src={avatarImgsData[img]}
            className={styles['avatar-img']}
            alt="avatar image"
          />
        ) : (
          <span>{name[0].toUpperCase()}</span>
        )}
      </div>
    </>
  );
};
