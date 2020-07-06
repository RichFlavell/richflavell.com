import React, { useContext, useEffect, useState } from "react"
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
  SubscribeContainer,
  SubscribeButton,
  ButtonIcon,
} from "./style"
import useDarkMode from "../../hooks/useDarkMode"
import { ThemeContext } from "../../context/ThemeContext"
import { Dark } from "../../config/style/theme"
import { Link } from "gatsby"

import Logo from "../../icons/logo.svg"
import { useTranslation } from "react-i18next"

const Header: React.FC<{ alignCenter?: boolean }> = ({ alignCenter }) => {
  const sidebarContext = useContext(SidebarContext)
  const themeContext = useContext(ThemeContext)
  const { toggleTheme } = useDarkMode()
  const { t } = useTranslation("Header")
  const [isSubscribeHidden, setIsSubscribeHidden] = useState(false)
  const subscribeEnabled = false

  const checkScroll = () => {
    if (window.pageYOffset > 50 && !isSubscribeHidden) {
      setIsSubscribeHidden(true)
    }
    if (window.pageYOffset <= 50 && isSubscribeHidden) {
      setIsSubscribeHidden(false)
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", checkScroll)
    return () => document.removeEventListener("scroll", checkScroll)
  }, [isSubscribeHidden])

  return (
    <Container>
      <LeftAction>
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
        {subscribeEnabled && (
          <SubscribeContainer floating={alignCenter} hidden={isSubscribeHidden}>
            <SubscribeButton>
              <ButtonIcon icon="mail" /> Subscribe
            </SubscribeButton>
          </SubscribeContainer>
        )}
      </Inner>
      <RightAction>
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
