import React, { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import { Container } from "./style"

const Page: React.FC = ({ children }) => {
  const sidebarContext = useContext(SidebarContext)
  return (
    <Container isSidebarOpen={sidebarContext.state.isOpen}>
      {children}
    </Container>
  )
}

export default Page
