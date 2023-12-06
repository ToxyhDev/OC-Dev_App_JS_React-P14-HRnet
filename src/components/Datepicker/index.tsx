import { LegacyRef, useEffect, useState } from 'react'
import styles from './index.module.scss'

interface IDatepickerProps {
  style: string
  name: string
  refHook: LegacyRef<HTMLInputElement> | undefined
}

export default function Datepicker({
  style,
  name,
  refHook,
}: Readonly<IDatepickerProps>) {
  const [open, setOpen] = useState(false)
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [save, setSave] = useState(false)

  const [date, setDate] = useState('')

  useEffect(() => {
    if (save === true) {
      const newDate = new Date(`${day} ${month} ${year}`)
      const newDay = newDate.getDate().toString().padStart(2, '0')
      const newMonth = (newDate.getMonth() + 1).toString().padStart(2, '0')
      setDate(`${newMonth}/${newDay}/${year}`)
      setSave(false)
      setOpen(!open)
    }
  }, [save])

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setOpen(!open)
  }

  const saveDate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setSave(true)
  }

  const monthsArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const currentYear = new Date().getFullYear()
  const yearsArray = Array.from(
    { length: currentYear - 1922 },
    (_, index) => currentYear - index
  )
  return (
    <>
      <input
        className={style}
        id={name}
        type="text"
        onClick={(e) => handleClick(e)}
        value={date}
        ref={refHook}
        readOnly
      />
      <div className={`${styles.date} ${open ? styles.open : ''}`}>
        {/* DAY */}
        <div className={styles.chooseDate}>
          <label htmlFor={`${name}-day`}>Day</label>
          <select
            name={`${name}-day`}
            id={`${name}-day`}
            className={styles.select}
            onChange={(e) => setDay(e.target.value)}
          >
            <option value=""></option>
            {[...Array(31).keys()].map((day) => (
              <option key={day}>{day + 1}</option>
            ))}
          </select>
        </div>

        {/* MONTH */}
        <div className={styles.chooseDate}>
          <label htmlFor={`${name}-month`}>Month</label>
          <select
            name={`${name}-month`}
            id={`${name}-month`}
            className={styles.select}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value=""></option>

            {monthsArray.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* YEAR */}
        <div className={styles.chooseDate}>
          <label htmlFor={`${name}-year`}>Year</label>
          <select
            name={`${name}-year`}
            id={`${name}-year`}
            className={styles.select}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value=""></option>

            {yearsArray.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.save} onClick={(e) => saveDate(e)}>
          Save
        </button>
      </div>
    </>
  )
}
