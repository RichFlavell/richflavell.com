import React, { Dispatch, createContext, useReducer, PropsWithChildren } from "react"

type IAction = {
  type: "OPEN_SIDERBAR" | "CLOSE_SIDEBAR" | "TOGGLE_SIDEBAR"
}

type IState = {
  isOpen: boolean
}

const initialState: IState = {
  isOpen: false,
}

type ISidebarContextProps = {
  state: IState
  dispatch: Dispatch<IAction>
}

export const SidebarContext = createContext({} as ISidebarContextProps)

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "OPEN_SIDERBAR":
      return { isOpen: true }
    case "CLOSE_SIDEBAR":
      return { isOpen: false }
    case "TOGGLE_SIDEBAR":
      return { isOpen: !state.isOpen }
  }
}

const SidebarContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
