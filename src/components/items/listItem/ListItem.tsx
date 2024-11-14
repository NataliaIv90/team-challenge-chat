import { FunctionComponent } from 'react';

import { Avatar } from '@/components';
import { setClassnameData } from '@/utils/functions/setClassnameData';
import { TAvatarImgData, TFunction, TSize } from '@/types/components';

import styles from './ListItem.module.scss';

export type TListItemProps = {
  name: string;
  avatarImg?: TAvatarImgData;
  supportingText?: string;
  labelText?: string;
  size: TSize;
  headline: string;
  onClick?: TFunction;
  selected?: boolean;
};

export const ListItem: FunctionComponent<TListItemProps> = ({
  name,
  size,
  avatarImg,
  supportingText,
  labelText,
  headline,
  onClick,
  selected = false,
}) => {
  const classnameData = {
    listItemContent: setClassnameData([
      styles['list-item-content'],
      `${supportingText || labelText ? styles['list-item-flex'] : ''}`,
      `${selected ? styles['selected'] : ''}`,
    ]),
    avatarWrapper: styles['avatar-wrapper'],
    headline: styles['headline'],
    supportingText: styles['supporting-text'],
    labelText: styles['label-text'],
  };

  return (
    <button className={classnameData.listItemContent} onClick={onClick}>
      <div className={classnameData.avatarWrapper}>
        <Avatar name={name} img={avatarImg} size={size} />
        <p className={classnameData.headline}>{headline}</p>
      </div>
      {supportingText ? (
        <p className={classnameData.supportingText}>{supportingText}</p>
      ) : null}
      {labelText ? (
        <p className={classnameData.labelText}>{labelText}</p>
      ) : null}
    </button>
  );
};
