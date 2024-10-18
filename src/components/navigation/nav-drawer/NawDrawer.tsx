import { FunctionComponent } from 'react';

import MenuIcon from '@icons/icon-menu.svg';
import { NavItem, NavList } from '@/components';
import { NavDrawerProps } from '@/types/components';
import SettingsIcon from '@icons/icon-settings.svg';

import styles from './NavDrawer.module.scss';

export const NavDrawer: FunctionComponent<NavDrawerProps> = ({
  showText = false,
}) => {
  const sectionClassName = styles['nav-drawer'];
  const headerClassName = styles['nav-drawer__header'];
  const footerClassName = styles['nav-drawer__footer'];

  return (
    <section className={sectionClassName}>
      <div className={headerClassName}>
        <NavItem icon={MenuIcon} showText={false} selected={false} />
      </div>

      <NavList showText={showText} />

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
