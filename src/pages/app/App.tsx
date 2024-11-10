import styles from './App.module.scss';
import { Avatar, AvatarBtn, Button, FABbtn, IconButton } from '@/components';
import Icon from '@icons/icon-bell.svg';

export const App = () => {
  // const [value, setValue] = useState('');
  return (
    <div className={styles.app}>
      <h1>Chatly</h1>
      <Avatar name='Nataliia' size='s' />
      <Avatar name='Nataliia' size='m' img='1_cat' selected={true} />
      <Avatar name='Nataliia' size='l' />
      <Avatar name='Nataliia' size='xl' selected img='2_texture' />
      <div>
        <Button text='text' buttonSize='small' buttonVariant='primary' />
      </div>
      <div>
        <FABbtn icon={Icon} onClick={() => console.log('hello')} />
      </div>
      <div>
        <IconButton icon={Icon} buttonVariant='outlined' isSmall={false} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '10px' }}>
        <AvatarBtn name='Nataliia' size='s' onClick={() => console.log("Avatar button clicked!")} />

        <AvatarBtn name='Nataliia' size='s' img='1_cat' />

        <AvatarBtn
          name="Nataliia"
          img="1_cat"
          size="s"
          selected={true}
          onClick={() => console.log("Avatar button clicked!")}
        />
      </div>
    </div>
  );
};
