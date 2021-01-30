import React, { createContext, Dispatch, useReducer } from "react"

interface IAction {
  type: "OPEN_MODAL" | "CLOSE_MODAL" | "CLOSE_ALL_MODALS"
  index?: string
}

interface IState {
  modals: Record<string, { isOpen: boolean }>
  activeModal: boolean
}

const initialState: IState = {
  modals: {},
  activeModal: false,
}

interface IModalContextProps {
  state: IState
  dispatch: Dispatch<IAction>
}

export const ModalContext = createContext({} as IModalContextProps)

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        modals: {
          ...state.modals,
          [action.index!]: {
            isOpen: true,
          },
        },
        activeModal: true,
      }
    case "CLOSE_MODAL":
      return {
        modals: {
          ...state.modals,
          [action.index!]: {
            isOpen: false,
          },
        },
        activeModal:
          Object.values(state.modals).some(modal => modal.isOpen) &&
          Object.keys(state.modals).length !== 1,
      }
    case "CLOSE_ALL_MODALS":
      return {
        modals: {},
        activeModal: false,
      }
  }
}

const ModalContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
