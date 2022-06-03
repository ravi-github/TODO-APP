import { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './components/SideBar/SideBar';
import Tasks from './components/Tasks/Tasks';
import styles from './App.module.scss';
 
const App = () => {

  const [listID, setListID] = useState(1);

  const showList = (id) => {
    setListID(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.appBody}>
        <SideBar showList={showList} />
        <Tasks listID={listID}/>
      </div>
    </div>
  );
};

export default App;
