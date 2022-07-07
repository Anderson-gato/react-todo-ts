import styles from './Header.module.css'
import todoLogo from '../assets/rocketLogo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={todoLogo} alt="Logo de um foguete" />
      <h2 className={styles.titleLogo}>
        <span>to</span>
        <span className={styles.lastPartLogo}>do</span>
      </h2>
    </header>
  )
}
