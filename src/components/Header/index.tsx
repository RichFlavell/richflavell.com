import React, { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import Button from "../Button"
import {
  Container,
  Inner,
  LogoContainer,
  MenuIcon,
  LeftAction,
  RightAction,
  Subtitle,
} from "./style"
import useDarkMode from "../../hooks/useDarkMode"
import { ThemeContext } from "../../context/ThemeContext"
import { Dark } from "../../config/style/theme"
import { Link } from "gatsby"

import Logo from "../../icons/logo.svg"
import { useTranslation } from "react-i18next"
import Subscribe from "../Subscribe"

const Header: React.FC<{ alignCenter?: boolean; actionsOnly?: boolean }> = ({
  alignCenter,
  actionsOnly,
}) => {
  const isSubscribeEnabled = false
  const sidebarContext = useContext(SidebarContext)
  const themeContext = useContext(ThemeContext)
  const { toggleTheme } = useDarkMode()
  const { t } = useTranslation("Header")
  const renderSubscribe = (floating?: boolean) => {
    return isSubscribeEnabled ? <Subscribe floating={floating} /> : null
  }

  return actionsOnly ? (
    <>
      <LeftAction floating={actionsOnly}>
        <Button
          onClick={() => sidebarContext.dispatch({ type: "TOGGLE_SIDEBAR" })}
          borderless={true}
        >
          <MenuIcon icon="menu" />
        </Button>
      </LeftAction>
      {typeof window !== "undefined" &&
        !window.localStorage.getItem("subscribed") &&
        renderSubscribe(alignCenter)}
      <RightAction floating={actionsOnly}>
        <Button onClick={() => toggleTheme()} borderless={true}>
          {themeContext.state.theme === Dark ? (
            <MenuIcon icon="brightness_7" />
          ) : (
            <MenuIcon icon="brightness_3" />
          )}
        </Button>
      </RightAction>
    </>
  ) : (
    <Container>
      <LeftAction floating={actionsOnly}>
        <Button
          onClick={() => sidebarContext.dispatch({ type: "TOGGLE_SIDEBAR" })}
          borderless={true}
        >
          <MenuIcon icon="menu" />
        </Button>
      </LeftAction>
      <Inner alignCenter={alignCenter}>
        <LogoContainer alignCenter={alignCenter}>
          <Link to="/">
            <Logo height="72px" />
          </Link>
          <Subtitle>{t("subtitle")}</Subtitle>
        </LogoContainer>
        {renderSubscribe(alignCenter)}
      </Inner>
      <RightAction floating={actionsOnly}>
        <Button onClick={() => toggleTheme()} borderless={true}>
          {themeContext.state.theme === Dark ? (
            <MenuIcon icon="brightness_7" />
          ) : (
            <MenuIcon icon="brightness_3" />
          )}
        </Button>
      </RightAction>
    </Container>
  )
}

export default Header
