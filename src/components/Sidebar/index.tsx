import React, { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import { MenuIcon } from "../Header/style"
import { useTranslation, Trans } from "react-i18next"

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

const Sidebar: React.FC = () => {
  const { t } = useTranslation("Sidebar")
  const sidebarContext = useContext(SidebarContext)
  return (
    <Container
      isOpen={sidebarContext.state.isOpen}
      onMouseLeave={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
    >
      <Actions>
        <ActionsTitle>{t("browse")}</ActionsTitle>
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
            {t("home")}
          </MenuLink>
        </Item>
        <Item>
          <MenuLink
            onClick={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
            to="/posts/"
          >
            {t("posts")}
          </MenuLink>
        </Item>
        <Item>
          <MenuLink
            onClick={() => sidebarContext.dispatch({ type: "CLOSE_SIDEBAR" })}
            to="/about/"
          >
            {t("about")}
          </MenuLink>
        </Item>
      </Items>
      <Footer>
        <FooterContainer>
          <Trans
            ns="Sidebar"
            i18nKey="builtWith"
            components={[
              <OutboundLink
                key="githubIcon"
                href="https://www.github.com/"
                target="_blank"
              >
                <GithubIcon height={14} />
              </OutboundLink>,
              <OutboundLink
                key="gatsbyIcon"
                href="https://www.gatsbyjs.org/"
                target="_blank"
              >
                <GatsbyIcon height={14} />
              </OutboundLink>,
            ]}
          />
        </FooterContainer>
      </Footer>
    </Container>
  )
}

export default Sidebar
