import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { formSlice } from '../components/Form/formSlice'

const rootReducer = combineReducers({
  employeeData: formSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

// Doc REDUX
// Type RootState en dehors du configureStore pour éviter la référence circulaire
// Module A dépend de B et inversement
export type RootState = ReturnType<typeof rootReducer>
