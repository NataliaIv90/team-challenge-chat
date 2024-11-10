import { FunctionComponent } from 'react';

import { Avatar } from '../avatarIcon/Avatar';
import { TAvatarSettings } from '@/types/components';

import styles from './AvatarRadio.module.scss';

export const AvatarRadio: FunctionComponent<TAvatarSettings> = ({
  name,
  selectedAvatar,
  avatarImg,
  size,
  onChange,
}) => {
  const classnameData = {
    inputClassname: styles['radio-input'],
    labelClassname: styles['radio-label'],
    wrapper: styles['radio-wrapper'],
  };
  const id = avatarImg ? `${avatarImg}-radio-btn` : `${name}-default-radio-btn`;

  return (
    <div className={classnameData.wrapper}>
      <label htmlFor={id} className={classnameData.labelClassname}>
        <Avatar
          name={name}
          size={size}
          img={avatarImg ? avatarImg : undefined}
          selected={selectedAvatar === (avatarImg || name)}
        />
      </label>
      <input
        type="radio"
        name="avatar-type"
        value={avatarImg || name}
        id={id}
        checked={selectedAvatar === (avatarImg || name)}
        onChange={onChange}
        className={classnameData.inputClassname}
      />
    </div>
  );
};
