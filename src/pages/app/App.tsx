import { ChangeEvent, useState } from 'react';
import styles from './App.module.scss';
import { Input } from '@/components';

export const App = () => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.app}>
      <h1>Chatly</h1>
      <Input
        type='text'
        value={value}
        placeholder='Placeholder'
        // supportiveText='supportive terx'
        // label='Label'
        onInpChange={(e: ChangeEvent<HTMLInputElement>) => { setValue(e.target.value) }}
        id='inp'
        // closeBtn={true}
        // searchIcon={true}
        closeBtnOnClick={() => alert('Close')}
      // disabled={true}
      // error='Error msg'
      />
    </div>
  );
};
