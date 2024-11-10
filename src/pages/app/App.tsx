import styles from './App.module.scss';
import { MessageItem } from '@/components/items/messageItem/MessageItem';

export const App = () => {

  return (
    <div className={styles.app}>
      <h1>Chatly</h1>
      <div>
        <MessageItem name="Nataliia" size="s" message='Message' date='256552 12:30' />
        <MessageItem
          name="Nataliia"
          size="s"
          message='Message' date={new Date().toDateString()}
          selected={true}
        />
      </div>

    </div>
  );
};
