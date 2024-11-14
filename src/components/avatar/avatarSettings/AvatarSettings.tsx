import { FunctionComponent } from 'react';

import { avatarImgsData } from '@/assets/data/avatarImgsData';
import { AvatarRadio } from '@/components';
import { setClassnameData } from '@/utils/functions/setClassnameData';
import { TAvatarId, TAvatarSettings } from '@/types/components';

import styles from './AvatarSettings.module.scss';

export const AvatarSettings: FunctionComponent<TAvatarSettings> = ({
  name,
  size,
  selectedAvatar,
  onChange,
}) => {
  const classnameData = {
    sectionClassname: styles['section'],
    avatarsContainerClassname: styles['avatars-container'],
    label1: setClassnameData([styles['label'], styles['label-1']]),
    label2: setClassnameData([styles['label'], styles['label-2']]),
  };

  return (
    <section className={classnameData.sectionClassname}>
      <form>
        <p className={classnameData.label1}>Use default avatar</p>
        <AvatarRadio
          name={name}
          selectedAvatar={selectedAvatar}
          size={size}
          onChange={onChange}
        />

        <p className={classnameData.label2}> Or choose</p>
        <div className={classnameData.avatarsContainerClassname}>
          {Object.keys(avatarImgsData).map((el) => (
            <AvatarRadio
              key={el}
              name={name}
              selectedAvatar={selectedAvatar}
              avatarImg={el as TAvatarId}
              size={size}
              onChange={onChange}
            />
          ))}
        </div>
      </form>
    </section>
  );
};
