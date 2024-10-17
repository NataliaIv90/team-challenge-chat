import { FunctionComponent } from 'react';

import ChatIcon from '@icons/icon-chats.svg';
import MenuIcon from '@icons/icon-menu.svg';
import { NavItem } from '@/components';
import { NavDrawerProps } from '@/types/components';
import PlusIcon from '@icons/icon-plus-circle.svg';
import SettingsIcon from '@icons/icon-settings.svg';

import styles from './NavDrawer.module.scss';

export const NavDrawer: FunctionComponent<NavDrawerProps> = ({
  showText = false,
}) => {
  const sectionClassName = styles['nav-drawer'];
  const headerClassName = styles['nav-drawer__header'];
  const listClassName = styles['nav-drawer__list'];
  const footerClassName = styles['nav-drawer__footer'];

  return (
    <section className={sectionClassName}>
      <div className={headerClassName}>
        <NavItem icon={MenuIcon} showText={false} selected={false} />
      </div>
      <ul className={listClassName}>
        <NavItem icon={ChatIcon} text='Chats' showText={showText} selected={false} />
        <NavItem
          icon={PlusIcon}
          showText={showText}
          text="Create chat"
          selected={false}
        />
      </ul>
      <div className={footerClassName}>
        <NavItem
          icon={SettingsIcon}
          showText={showText}
          text="Settings"
          selected={false}
        />
      </div>
    </section>
  );
};
