import styles from './Tasks.module.css'

import clipBoard from '../assets/clipboard.svg'

export function Tasks() {
  return (
    <>
      <div className={styles.infoTasks}>
        <strong className={styles.createdTasks}>
          Tarefas criadas
          <span className={styles.taskInformationCounter}>0</span>
        </strong>
        <strong className={styles.completedTasks}>
          Concluídas
          <span className={styles.taskInformationCounter}>0</span>
        </strong>
      </div>
      <div className={styles.containerTasks}>
        <div className={styles.noTasks}>
          <img src={clipBoard} alt="prancheta" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </>
  )
}
