import React, { PropsWithChildren } from "react"
import { Container, Holder } from "./style"

const Footer = ({ children }: PropsWithChildren) => {
  return (
    <Holder>
      <Container>{children}</Container>
    </Holder>
  )
}

export default Footer;