import React from "react"
import { Container, Inner, Logo, SubscribeButton } from "./style"
import { Link } from "gatsby"

const Header: React.FC = ({}) => {
  return (
    <Container>
      <Inner>
        <Logo>
          <Link to="/">Rich Flavell</Link>
        </Logo>
        <SubscribeButton onClick={() => alert("Test")}>
          {"Testing"}
        </SubscribeButton>
      </Inner>
    </Container>
  )
}

export default Header
