import React, { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import Button from "../Button"
import {
  Container,
  HeaderOuterSection,
  Inner,
  LogoContainer,
  MenuIcon,
} from "./style"
import { Right } from "../../config/style/mdx"
import useDarkMode from "../../hooks/useDarkMode"
import { ThemeContext } from "../../context/ThemeContext"
import { Dark } from "../../config/style/theme"
import { Link } from "gatsby"

import Logo from "../../icons/logo.svg"

const Header: React.FC = ({}) => {
  const sidebarContext = useContext(SidebarContext)
  const themeContext = useContext(ThemeContext)
  const { toggleTheme } = useDarkMode()

  return (
    <Container>
      <HeaderOuterSection>
        <Button
          onClick={() => sidebarContext.dispatch({ type: "TOGGLE_SIDEBAR" })}
          borderless={true}
        >
          <MenuIcon icon="menu" />
        </Button>
      </HeaderOuterSection>
      <Inner>
        <LogoContainer>
          <Link to="/">
            <Logo />
          </Link>
        </LogoContainer>
      </Inner>
      <HeaderOuterSection>
        <Right>
          <Button onClick={() => toggleTheme()} borderless={true}>
            {themeContext.state.theme === Dark ? (
              <MenuIcon icon="brightness_7" />
            ) : (
              <MenuIcon icon="brightness_3" />
            )}
          </Button>
        </Right>
      </HeaderOuterSection>
    </Container>
  )
}

export default Header
