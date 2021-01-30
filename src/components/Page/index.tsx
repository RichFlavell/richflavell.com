import React, { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import { Container } from "./style"
import { ModalContext } from "../../context/ModalContext"

const Page: React.FC = ({ children }) => {
  const sidebarContext = useContext(SidebarContext)
  const modalContext = useContext(ModalContext)

  return (
    <Container
      isSidebarOpen={sidebarContext.state.isOpen}
      isModalOpen={modalContext.state.activeModal}
      onClick={() => {
        if (sidebarContext.state.isOpen || modalContext.state.activeModal) {
          modalContext.dispatch({ type: "CLOSE_ALL_MODALS" })
        }
      }}
    >
      {children}
    </Container>
  )
}

export default Page
