import styles from './index.module.scss'
import Dropdown from '../Dropdown'
import states from './statesList'
import Datepicker from '../Datepicker'

export default function Form() {
  return (
    <form className={styles.formContainer}>
      <fieldset className={styles.fieldset}>
        <legend>Personal Info</legend>
        <label className={styles.label} htmlFor="first-name">
          First Name :
        </label>
        <input className={styles.input} type="text" id="first-name" />

        <label className={styles.label} htmlFor="last-name">
          Last Name :
        </label>
        <input className={styles.input} type="text" id="last-name" />

        <label className={styles.label} htmlFor="date-of-birth">
          Date of Birth :
        </label>
        <Datepicker style={styles.input} name="date-of-birth" />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>Address</legend>

        <label className={styles.label} htmlFor="street">
          Street :
        </label>
        <input className={styles.input} id="street" type="text" />

        <label className={styles.label} htmlFor="city">
          City :
        </label>
        <input className={styles.input} id="city" type="text" />

        <label className={styles.label} htmlFor="state">
          State :
        </label>
        <Dropdown name="state">
          {states.map((element, index) => (
            <option key={index + 1} value={element.name}>
              {element.name}
            </option>
          ))}
        </Dropdown>

        <label className={styles.label} htmlFor="zip-code">
          Zip Code :
        </label>
        <input className={styles.input} id="zip-code" type="number" />
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend>Professional Info</legend>
        <label className={styles.label} htmlFor="start-date">
          Start Date :
        </label>
        <Datepicker style={styles.input} name="start-date" />

        <label className={styles.label} htmlFor="department">
          Department :
        </label>
        <Dropdown name="department">
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
  )
}
