import React, { useContext } from "react"
import { Container, Wrapper } from "./style"
import { ModalContext } from "../../context/ModalContext"
import ReactDOM from "react-dom"

const Modal: React.FC<{ index: string }> = ({ index, children }) => {
  const modalContext = useContext(ModalContext)
  const elem = document.getElementById("___modal-portal")

  return elem
    ? ReactDOM.createPortal(
        <Wrapper isOpen={modalContext.state.modals[index]?.isOpen}>
          <Container onClick={e => e.stopPropagation()}>{children}</Container>
        </Wrapper>,
        elem
      )
    : null
}

export default Modal
