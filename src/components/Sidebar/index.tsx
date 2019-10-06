import React, { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import { Container } from "./style"
import { MenuIcon } from "../Header/style"
import Button from "../Button"

const Sidebar: React.FC = ({}) => {
  const sidebarContext = useContext(SidebarContext)
  return (
    <Container
      isOpen={sidebarContext.state.isOpen}
      onMouseLeave={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
    >
      <Button
        onClick={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
        borderless
      >
        <MenuIcon icon="menu" />
      </Button>
    </Container>
  )
}

export default Sidebar
