import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { formSlice } from '../components/Form/formSlice'
import { IStateEmployeeData } from '../types'

const rootReducer = combineReducers({
  employeeData: formSlice.reducer,
})

// load state from local storage
const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('persistantState')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

// save state to local storage
const saveToLocalStorage = (state: IStateEmployeeData) => {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('persistantState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

const preloadedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
})

// Saving the state in local storage each time it is modified
store.subscribe(() => {
  const state = store.getState()
  saveToLocalStorage(state)
})

// Doc REDUX
// Type RootState en dehors du configureStore pour éviter la référence circulaire
// Module A dépend de B et inversement
export type RootState = ReturnType<typeof rootReducer>
