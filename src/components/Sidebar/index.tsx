import React, { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import { MenuIcon } from "../Header/style"

import Footer from "../Footer"
import {
  ActionButton,
  Actions,
  ActionsTitle,
  Container,
  FooterContainer,
  Item,
  Items,
  MenuLink,
} from "./style"

import GatsbyIcon from "../../icons/gatsby.svg"

const Sidebar: React.FC = ({}) => {
  const sidebarContext = useContext(SidebarContext)
  return (
    <Container
      isOpen={sidebarContext.state.isOpen}
      onMouseLeave={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
    >
      <Actions>
        <ActionsTitle>BROWSE</ActionsTitle>
        <ActionButton
          onClick={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
          borderless={true}
        >
          <MenuIcon icon="close" />
        </ActionButton>
      </Actions>
      <Items>
        <Item>
          <MenuLink
            onClick={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
            to="/"
          >
            Home
          </MenuLink>
        </Item>
        <Item>
          <MenuLink
            onClick={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
            to="/articles"
          >
            Articles
          </MenuLink>
        </Item>
        <Item>
          <MenuLink
            onClick={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
            to="/gear"
          >
            Gear
          </MenuLink>
        </Item>
        <Item>
          <MenuLink
            onClick={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
            to="/about"
          >
            About
          </MenuLink>
        </Item>
      </Items>
      <Footer>
        <FooterContainer>
          Built with: 💜, lots of ☕ & &nbsp;{" "}
          <a href="https://www.gatsbyjs.org/" target="_blank">
            <GatsbyIcon height={24} />
          </a>
        </FooterContainer>
      </Footer>
    </Container>
  )
}

export default Sidebar
