import { AvatarSettings } from '@/components';
import styles from './App.module.scss';
import { useState } from 'react';
import { ListItem } from '@/components/items/listItem/ListItem';
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

      <div>
        <ListItem name="Nataliia" size="s" headline="Headline" />
        <ListItem
          name="Nataliia"
          size="s"
          headline="Headline Headline Headline Headline HeadlineHeadline Headline Headline Headline Headline Headline HeadlineHeadlineHeadlineHeadline Headline Headline"
          supportingText="supporting text"
        />
        <ListItem
          selected={true}
          avatarImg="1_cat"
          name="Nataliia"
          size="s"
          headline="Headline"
          labelText="label text"
        />
      </div>
    </div>
  );
};
