import Navigation from '../Navigation'
import styles from './index.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>HRnet</h1>
      <Navigation />
    </header>
  )
}
