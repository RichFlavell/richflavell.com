import { Link } from "gatsby"
import React, { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import Button from "../Button"
import SocialIcons from "../SocialIcons"
import {
  Container,
  HeaderInnerSection,
  HeaderOuterSection,
  Inner,
  Logo,
  MenuIcon,
  StyledIcon,
  SubscribeButton,
} from "./style"
import { Right } from "../../config/style/mdx"
import useDarkMode from "../../hooks/useDarkMode"
import { ThemeContext } from "../../context/ThemeContext"
import { Dark } from "../../config/style/theme"

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
        <HeaderInnerSection>
          <SocialIcons />
        </HeaderInnerSection>
        <Logo>
          <Link to="/">Rich Flavell</Link>
        </Logo>
        <HeaderInnerSection>
          <SubscribeButton to="/contact">
            <StyledIcon icon="mail_outline" />
            {"Contact"}
          </SubscribeButton>
        </HeaderInnerSection>
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
