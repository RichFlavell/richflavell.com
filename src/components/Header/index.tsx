import React, { useContext } from "react"
import {
  Container,
  Inner,
  HeaderOuterSection,
  HeaderInnerSection,
  Logo,
  StyledIcon,
  SubscribeButton,
  MenuIcon,
} from "./style"
import { Link } from "gatsby"
import Button from "../Button"
import SocialIcons from "../SocialIcons"
import { SidebarContext } from "../../context/SidebarContext"

const Header: React.FC = ({}) => {
  const sidebarContext = useContext(SidebarContext)
  return (
    <Container>
      <HeaderOuterSection>
        <Button
          onClick={() => sidebarContext.dispatch({ type: "TOGGLE_SIDEBAR" })}
          borderless
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
          <SubscribeButton onClick={() => alert("Subscribe")}>
            <StyledIcon icon="mail_outline" />
            &nbsp; {"Subscribe"}
          </SubscribeButton>
        </HeaderInnerSection>
      </Inner>
      <HeaderOuterSection></HeaderOuterSection>
    </Container>
  )
}

export default Header
