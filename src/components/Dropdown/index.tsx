import styles from './index.module.scss'
import { ReactNode } from 'react'
interface IDropdownProps {
  name?: string
  children?: ReactNode
}

export default function Dropdown({ name, children }: Readonly<IDropdownProps>) {
  return (
    <select className={styles.dropdown} name={name} id={name}>
      <option value=""></option>
      {children}
    </select>
  )
}
