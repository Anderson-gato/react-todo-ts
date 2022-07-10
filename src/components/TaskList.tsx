import { Trash } from 'phosphor-react';
import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <div className={styles.taskListWrapper}>
      <div className={styles.taskDescriptionWrapper}>
        <input type="checkbox" name="task" id="taskList" />
        <label className={styles.taskDescription} htmlFor="task">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </label>
      </div>
      <button className={styles.deleteTask}>
        <Trash size="16" />
      </button>
    </div>
  );
}
