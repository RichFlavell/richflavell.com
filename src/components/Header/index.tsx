import React from "react"
import {
  Container,
  Inner,
  HeaderSection,
  Logo,
  StyledIcon,
  MenuIcon,
} from "./style"
import { Link } from "gatsby"
import Button from "../Button"
import SocialIcons from "../SocialIcons"

const Header: React.FC = ({}) => {
  return (
    <Container>
      <HeaderSection>
        <Button onClick={() => alert("Open sidebar")} borderless>
          <MenuIcon icon="menu" />
        </Button>
      </HeaderSection>
      <Inner>
        <SocialIcons />
        <Logo>
          <Link to="/">Rich Flavell</Link>
        </Logo>
        <Button onClick={() => alert("Subscribe")}>
          <StyledIcon icon="mail_outline" />
          &nbsp; {"Subscribe"}
        </Button>
      </Inner>
      <HeaderSection></HeaderSection>
    </Container>
  )
}

export default Header
