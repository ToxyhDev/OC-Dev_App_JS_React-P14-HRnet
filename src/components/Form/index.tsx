import styles from './index.module.scss'
import Dropdown from '../Dropdown'
import states from './statesList'
import Datepicker from '../Datepicker'
import Modal from '../Modal'
import { useRef, FormEvent, useState } from 'react'

export default function Form() {
  const [showModal, setShowModal] = useState(false)

  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const dateOfBirthRef = useRef<HTMLInputElement>(null)
  const streetRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const stateRef = useRef<HTMLSelectElement>(null)
  const zipCodeRef = useRef<HTMLInputElement>(null)
  const startDateRef = useRef<HTMLInputElement>(null)
  const departmentRef = useRef<HTMLSelectElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getDataInput()
    console.log('submit')
    setShowModal(true)
    setTimeout(() => setShowModal(false), 1000)
  }
  const getDataInput = () => {
    const data = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      dateOfBirth: dateOfBirthRef.current?.value,
      street: streetRef.current?.value,
      city: cityRef.current?.value,
      state: stateRef.current?.value,
      zipCode: zipCodeRef.current?.value,
      startDate: startDateRef.current?.value,
      department: departmentRef.current?.value,
    }

    console.log('Data:', data)
  }
  return (
    <>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <fieldset className={styles.fieldset}>
          <legend>Personal Info</legend>
          <label className={styles.label} htmlFor="first-name">
            First Name :
          </label>
          <input
            className={styles.input}
            ref={firstNameRef}
            type="text"
            id="first-name"
          />

          <label className={styles.label} htmlFor="last-name">
            Last Name :
          </label>
          <input
            className={styles.input}
            ref={lastNameRef}
            type="text"
            id="last-name"
          />

          <label className={styles.label} htmlFor="date-of-birth">
            Date of Birth :
          </label>
          <Datepicker
            style={styles.input}
            refHook={dateOfBirthRef}
            name="date-of-birth"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>Address</legend>

          <label className={styles.label} htmlFor="street">
            Street :
          </label>
          <input
            className={styles.input}
            ref={streetRef}
            id="street"
            type="text"
          />

          <label className={styles.label} htmlFor="city">
            City :
          </label>
          <input className={styles.input} ref={cityRef} id="city" type="text" />

          <label className={styles.label} htmlFor="state">
            State :
          </label>
          <Dropdown name="state" refHook={stateRef}>
            {states.map((element, index) => (
              <option key={index + 1} value={element.name}>
                {element.name}
              </option>
            ))}
          </Dropdown>

          <label className={styles.label} htmlFor="zip-code">
            Zip Code :
          </label>
          <input
            className={styles.input}
            ref={zipCodeRef}
            id="zip-code"
            type="number"
          />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend>Professional Info</legend>
          <label className={styles.label} htmlFor="start-date">
            Start Date :
          </label>
          <Datepicker
            style={styles.input}
            refHook={startDateRef}
            name="start-date"
          />

          <label className={styles.label} htmlFor="department">
            Department :
          </label>
          <Dropdown name="department" refHook={departmentRef}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </Dropdown>
        </fieldset>

        <button className={styles.button} type="submit">
          Save
        </button>
      </form>
      <Modal activeModal={showModal} />
    </>
  )
}
