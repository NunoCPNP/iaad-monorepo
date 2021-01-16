import { createContext, useReducer, useContext } from 'react'
import { reducer } from './reducer'
import { initialState, initialStateTypes } from './initialState'

const AppStateContext = createContext<Partial<initialStateTypes>>({})
const AppDispatchContext = createContext()

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  const context = useContext(AppStateContext)

  if (context === undefined) {
    throw new Error('useAppState must be used within context provider')
  }

  return context
}

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext)

  if (context === undefined) {
    throw new Error('useAppDispatch must be used within context provider')
  }

  return context
}

export const useAppContext = () => {
  return [useAppState(), useAppDispatch()]
}
