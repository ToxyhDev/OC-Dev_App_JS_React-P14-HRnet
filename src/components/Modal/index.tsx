import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

interface IModalProps {
  activeModal: boolean
}

export default function Modal({ activeModal }: Readonly<IModalProps>) {
  const [active, setActive] = useState(false)

  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeModal === true) {
      document.body.style.overflow = 'hidden'
      document.body.setAttribute('aria-hidden', 'true')
      closeBtnRef.current?.focus()
      modalRef.current?.setAttribute('aria-hidden', 'false')
      setActive(true)
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      })
    }
  }, [activeModal])

  const disableModal = () => {
    document.body.style.overflow = 'visible'
    document.body.setAttribute('aria-hidden', 'false')
    modalRef.current?.setAttribute('aria-hidden', 'true')
    setActive(false)
  }

  return (
    <div
      ref={modalRef}
      className={`${styles.modal} ${active ? styles.active : ''}`}
    >
      <div className={styles.modalContent}>
        <p className={styles.text}>Employee created.</p>
        <button
          ref={closeBtnRef}
          className={styles.button}
          onClick={() => disableModal()}
        >
          Close
        </button>
      </div>
    </div>
  )
}
