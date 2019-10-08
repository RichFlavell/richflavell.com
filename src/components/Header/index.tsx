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

const Header: React.FC = ({}) => {
  const sidebarContext = useContext(SidebarContext)
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
          <SubscribeButton onClick={() => alert("Subscribe")}>
            <StyledIcon icon="mail_outline" />
            &nbsp; {"Subscribe"}
          </SubscribeButton>
        </HeaderInnerSection>
      </Inner>
      <HeaderOuterSection />
    </Container>
  )
}

export default Header
