import { JSX, FunctionComponent } from 'react';

import { setClassnameData } from '@/utils/setClassnameData';
import styles from './Avatar.module.scss';

export type TName = string;

export type TAvatarId = '1_cat' | '3_dog' | '2_texture' | '3_arch' | '4_berry';

export type TAvatarProps = {
    name: TName;
    img?: TAvatarId;
    selected?: boolean;
}

export const Avatar: FunctionComponent<TAvatarProps> = ({ name, img, selected = false }): JSX.Element => {
    const avatarClassname = setClassnameData([
        styles['avatar-icon'],
        `${selected ? 'selected' : null}`,
        `${img ? null : 'text'}`
    ]);

    return (
        <div className={avatarClassname}>
            {img
                ? <img
                    src={`../../../assets/img/avatar-img/${img}/.png`}
                    className='avatar-img'
                    alt='avatar image'
                />
                : <span>{name[0].toUpperCase()}</span>
            }
        </div>
    )
}