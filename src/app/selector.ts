// Récupére dans le state global et traite l'info
import { RootState } from './store'

export const getData = (state: RootState) => state?.employeeData
