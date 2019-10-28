import React from "react"
import { Container, Holder } from "./style"

const Footer: React.FC = ({ children }) => {
  return (
    <Holder>
      <Container>{children}</Container>
    </Holder>
  )
}

export default Footer
