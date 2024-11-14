import { FunctionComponent } from 'react';

import { Avatar } from '@/components';
import { setClassnameData } from '@/utils/functions/setClassnameData';
import { TAvatarImgData, TSize } from '@/types/components';

import styles from './MessageItem.module.scss';
import { formatDate } from '@/utils/functions/formatDate';

export type TMessageItemProps = {
  name: string;
  avatarImg?: TAvatarImgData;
  date: string;
  message: string;
  size: TSize;
  selected?: boolean;
};

export const MessageItem: FunctionComponent<TMessageItemProps> = ({
  name,
  size,
  avatarImg,
  date,
  message,
  selected = false,
}) => {
  const classnameData = {
    listItemContent: setClassnameData([
      styles['message-item-content'],
      `${selected ? styles['selected'] : ''}`,
    ]),
    name: styles['name'],
    date: styles['date'],
    message: styles['message'],
    contentWrapper: styles['content-wrapper'],
    inline: styles['inline'],
  };

  const dateData = formatDate(date);
  return (
    <section className={classnameData.listItemContent}>
      <Avatar name={name} img={avatarImg} size={size} />
      <div className={classnameData.contentWrapper}>
        <div className={classnameData.inline}>
          <h3 className={classnameData.name}>{name}</h3>
          <p className={classnameData.date}>{dateData}</p>
        </div>
        <p className={classnameData.message}>{message}</p>
      </div>
    </section>
  );
};
