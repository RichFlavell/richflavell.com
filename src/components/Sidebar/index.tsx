import React, { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import Button from "../Button"
import { MenuIcon } from "../Header/style"
import { Container } from "./style"

const Sidebar: React.FC = ({}) => {
  const sidebarContext = useContext(SidebarContext)
  return (
    <Container
      isOpen={sidebarContext.state.isOpen}
      onMouseLeave={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
    >
      <Button
        onClick={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
        borderless={true}
      >
        <MenuIcon icon="menu" />
      </Button>
    </Container>
  )
}

export default Sidebar
