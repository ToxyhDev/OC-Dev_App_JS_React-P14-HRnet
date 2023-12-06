import styles from './index.module.scss'
import { LegacyRef, ReactNode } from 'react'
interface IDropdownProps {
  name?: string
  children?: ReactNode
  refHook: LegacyRef<HTMLSelectElement> | undefined
}

export default function Dropdown({
  name,
  refHook,
  children,
}: Readonly<IDropdownProps>) {
  return (
    <select className={styles.dropdown} ref={refHook} name={name} id={name}>
      <option value=""></option>
      {children}
    </select>
  )
}
