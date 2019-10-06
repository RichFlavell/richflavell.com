import React, { useReducer, createContext, Dispatch } from "react"

type Action = {
  type: "OPEN_SIDERBAR" | "CLOSE_SIDEBAR" | "TOGGLE_SIDEBAR"
}

interface IState {
  isOpen: boolean
}

const initialState: IState = {
  isOpen: false,
}

interface ISidebarContextProps {
  state: IState
  dispatch: Dispatch<Action>
}

export const SidebarContext = createContext({} as ISidebarContextProps)

function reducer(state: IState, action: Action) {
  switch (action.type) {
    case "OPEN_SIDERBAR":
      return { isOpen: true }
    case "CLOSE_SIDEBAR":
      return { isOpen: false }
    case "TOGGLE_SIDEBAR":
      return { isOpen: !state.isOpen }
  }
}

const SidebarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
