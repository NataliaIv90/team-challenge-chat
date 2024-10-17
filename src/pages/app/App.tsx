import styles from './App.module.scss';
import icon from '@icons/icon-edit.svg';
import { Button, FABbtn, IconButton, NavItem } from '@/components';

export const App = () => {
  return (
    <div className={styles.app}>
      <h1>Chatly</h1>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
        <Button
          text="text button"
          disabled={true}
          icon={icon}
          buttonVariant="primary"
          buttonSize="small"
        />
        <Button
          text="text button"
          icon={icon}
          buttonVariant="primary"
          buttonSize="small"
          isLoading={true}
        />
        <Button
          text="text button"
          icon={icon}
          buttonVariant="primary"
          buttonSize="small"
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
        <Button
          text="text button"
          disabled={true}
          icon={icon}
          buttonVariant="secondary"
          buttonSize="medium"
        />
        <Button
          text="text button"
          icon={icon}
          buttonVariant="secondary"
          buttonSize="medium"
        />
        <Button
          text="text button"
          icon={icon}
          buttonVariant="secondary"
          buttonSize="medium"
          isLoading={true}
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
        <Button
          text="text button"
          disabled={true}
          icon={icon}
          buttonVariant="text"
          buttonSize="large"
        />
        <Button
          text="text button"
          icon={icon}
          buttonVariant="text"
          buttonSize="large"
        />
        <Button
          text="text button"
          icon={icon}
          buttonVariant="text"
          buttonSize="large"
          isLoading={true}
        />
      </div>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
        <IconButton
          icon={icon}
          type="button"
          buttonVariant="outlined"
          isSmall={false}
        />

        <IconButton
          icon={icon}
          type="button"
          buttonVariant="standart"
          isSmall={false}
        />

        <IconButton
          icon={icon}
          type="button"
          buttonVariant="outlined"
          isSmall={true}
        />

        <IconButton
          icon={icon}
          type="button"
          buttonVariant="standart"
          isSmall={true}
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
        <FABbtn icon={icon} />
        <NavItem icon={icon} showText={true} text="Nav item" selected={false} />
        <NavItem
          icon={icon}
          showText={true}
          text="Nav item"
          selected={false}
          isLoading={true}
        />
        <NavItem icon={icon} showText={true} text="Nav item" selected={true} />
      </div>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
        <FABbtn icon={icon} />
        <NavItem
          icon={icon}
          showText={false}
          text="Nav item"
          selected={false}
        />
        <NavItem
          icon={icon}
          showText={false}
          text="Nav item"
          selected={false}
          isLoading={true}
        />
        <NavItem icon={icon} showText={false} text="Nav item" selected={true} />
      </div>
    </div>
  );
};
