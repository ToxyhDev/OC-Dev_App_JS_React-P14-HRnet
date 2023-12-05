import Form from '../../components/Form'
import styles from './index.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Create Employee</h2>
      <Form></Form>
    </main>
  )
}
