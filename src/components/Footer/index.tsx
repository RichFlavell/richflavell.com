import React from "react"
import { Container, Holder, Right } from "./style"

const Footer: React.FC = ({}) => {
  return (
    <Holder>
      <Container>
        Rich Flavell © {new Date().getFullYear()}. All rights reserved
        <Right>English &nbsp;//&nbsp; 日本語</Right>
      </Container>
    </Holder>
  )
}

export default Footer
