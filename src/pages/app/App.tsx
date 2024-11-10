import { AvatarSettings } from '@/components';
import styles from './App.module.scss';
import { useState } from 'react';
// import { Avatar, AvatarBtn, Button, FABbtn, IconButton } from '@/components';
// import Icon from '@icons/icon-bell.svg';

export const App = () => {
  // const [value, setValue] = useState('');
  const name = 'Nataliia';
  const [selectedAvatar, setSelectedAvatar] = useState<string>(name);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAvatar(event.target.value);
  };

  return (
    <div className={styles.app}>
      <h1>Chatly</h1>
      <AvatarSettings
        selectedAvatar={selectedAvatar}
        onChange={handleAvatarChange}
        name={name}
        size="s"
      />
    </div>
  );
};
