import React, { createContext, Dispatch, useReducer } from "react"
import { DefaultTheme } from "styled-components"
import Default, { Dark } from "../config/style/theme"

interface IAction {
  type: "TOGGLE_THEME" | "SET_LIGHT_THEME" | "SET_DARK_THEME"
}

interface IState {
  theme: DefaultTheme
}

const initialState: IState = {
  theme: Default,
}

interface IThemeContextProps {
  state: IState
  dispatch: Dispatch<IAction>
}

export const ThemeContext = createContext({} as IThemeContextProps)

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === Default ? Dark : Default }
    case "SET_LIGHT_THEME":
      return { theme: Default }
    case "SET_DARK_THEME":
      return { theme: Dark }
  }
}

const ThemeContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
