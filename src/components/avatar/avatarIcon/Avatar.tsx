import { JSX, FunctionComponent } from 'react';

import CatImg from '@avatarImgs/1_cat.png';
import DogImg from '@avatarImgs/3_dog.png';
import TextureImg from '@avatarImgs/2_texture.png';
import ArchImg from '@avatarImgs/4_arch.png';
import BerryImg from '@avatarImgs/5_berry.png';

import { setClassnameData } from '@/utils/setClassnameData';
import styles from './Avatar.module.scss';

export type TName = string;

export type TAvatarId = '1_cat' | '3_dog' | '2_texture' | '3_arch' | '4_berry';

export type TSize = 's' | 'm' | 'l' | 'xl';

export type TAvatarProps = {
    name: TName;
    img?: TAvatarId;
    selected?: boolean;
    size: TSize;
}

const avatarImgsData = {
    '1_cat': CatImg,
    '3_dog': DogImg,
    '2_texture': TextureImg,
    '3_arch': ArchImg,
    '4_berry': BerryImg,
}

export const Avatar: FunctionComponent<TAvatarProps> = ({ name, img, selected = false, size }): JSX.Element => {
    const avatarClassname = setClassnameData([
        'avatar-icon',
        styles['avatar-icon'],
        styles[size],
        `${selected ? styles['selected'] : null}`,
        `${img ? null : styles.text}`
    ]);


    return (
        <>
            <div className={avatarClassname}>
                {img
                    ? <img
                        src={avatarImgsData[img]}
                        className={styles['avatar-img']}
                        alt='avatar image'
                    />
                    : <span>{name[0].toUpperCase()}</span>
                }
            </div>
        </>
    )
}
