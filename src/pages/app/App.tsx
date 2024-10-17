import styles from './App.module.scss';
import { NavDrawer } from '@/components';

export const App = () => {
  return (
    <div className={styles.app}>
      <h1>Chatly</h1>
      <NavDrawer showText={true} />
    </div>
  );
};
