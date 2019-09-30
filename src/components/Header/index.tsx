import React from "react"
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

const Header: React.FC = ({}) => {
  return (
    <Container>
      <HeaderOuterSection>
        <Button onClick={() => alert("Open sidebar")} borderless>
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
