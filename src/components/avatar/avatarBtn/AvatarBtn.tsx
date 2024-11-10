import { FunctionComponent } from 'react';
import { Avatar, TAvatarProps } from '../avatarIcon/Avatar';
import {
  TButtonBaseProps,
  withButtonBase,
} from '@/HOCs/withButtonBase/withButtonBase';
import styles from './AvatarBtn.module.scss';

type TAvatarButtonProps = TAvatarProps & TButtonBaseProps;

const AvatarBaseBtn: FunctionComponent<TAvatarButtonProps> = (props) => {
  return <Avatar {...props} />;
};

export const AvatarBtn = withButtonBase(
  AvatarBaseBtn,
  styles['avatar-btn'], // Root button styling
  styles['avatar-icon'] // Icon (avatar) styling
  // styles['avatar-loading']   // Loading state styling, optional
);
