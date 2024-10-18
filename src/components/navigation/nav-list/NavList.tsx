import ChatIcon from '@icons/icon-chats.svg';
import { NavItem } from '@/components';
import PlusIcon from '@icons/icon-plus-circle.svg';

import styles from './NavList.module.scss';

export const NavList = ({ showText }: { showText: boolean }) => {
  const listClassName = styles['nav-drawer__list'];

  return (
    <ul className={listClassName}>
      <li>
        <NavItem
          icon={ChatIcon}
          text="Chats"
          showText={showText}
          selected={false}
        />
      </li>
      <li>
        <NavItem
          icon={PlusIcon}
          showText={showText}
          text="Create chat"
          selected={false}
        />
      </li>
    </ul>
  );
};
