import styles from './AddTask.module.css';

import { PlusCircle } from 'phosphor-react';

export function AddTask() {
  return (
    <div className={styles.addTaskWrapper}>
      <input
        className={styles.inputAddTask}
        type="text"
        placeholder="Adicione uma nova tafera"
      />
      <button className={styles.buttonAddTask}>
        Criar <PlusCircle size={20} />
      </button>
    </div>
  );
}
