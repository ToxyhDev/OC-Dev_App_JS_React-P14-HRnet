import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import { DataTable } from 'datatable-react-module'
import { getData } from '../../app/selector'
import { IEmployee } from '../../types'

export default function Employees() {
  const dataEmployees = useSelector(getData)
  console.log(dataEmployees.data)
  const customColumnOrder = [
    'firstName',
    'lastName',
    'startDate',
    'department',
    'dateOfBirth',
    'street',
    'city',
    'state',
    'zipCode',
  ]
  const customColumnTitle = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ]
  return (
    <main className={styles.main}>
      <DataTable<IEmployee>
        data={dataEmployees.data}
        title="Current Employees"
        columnOrder={customColumnOrder}
        columnTitle={customColumnTitle}
        styleDataTable={styles.datatable}
        styleToolsBar={styles.toolsbar}
        styleTableContainer={styles.tableContainer}
        styleTable={styles.table}
        styleThead={styles.th}
        styleTbody={styles.td}
        styleTr={styles.tr}
        entries={true}
        styleEntries={styles.entries}
        styleEntriesFooter={styles.entriesFooter}
        stylePrevNext={styles.btnPrevNext}
        stylePage={styles.btnPage}
        filter={true}
        searchBar={true}
      ></DataTable>
    </main>
  )
}
