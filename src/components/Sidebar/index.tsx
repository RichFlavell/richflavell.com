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

import { OutboundLink } from "gatsby-plugin-google-analytics"
import GatsbyIcon from "../../icons/gatsby.svg"
import GithubIcon from "../../icons/github.svg"

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
            to="/posts"
          >
            Posts
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
          Built with lots of ☕,&nbsp;
          <OutboundLink href="https://www.gatsbyjs.org/" target="_blank">
            <GatsbyIcon height={14} />
          </OutboundLink>
          &nbsp; & &nbsp;
          <OutboundLink href="https://www.github.com/" target="_blank">
            <GithubIcon height={14} />
          </OutboundLink>
          .
        </FooterContainer>
      </Footer>
    </Container>
  )
}

export default Sidebar
