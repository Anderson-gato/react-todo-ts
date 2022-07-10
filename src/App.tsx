import styles from './App.module.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
        <Tasks />
      </div>
    </>
  );
}

export default App;
