import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
};
