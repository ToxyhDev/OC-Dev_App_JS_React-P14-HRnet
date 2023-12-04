import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.link}` : styles.link
        }
      >
        Homepage
      </NavLink>
      <NavLink
        to="/employees"
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.link}` : styles.link
        }
      >
        Current Employees
      </NavLink>
    </nav>
  )
}
