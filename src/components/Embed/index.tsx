import React from "react"
import { Container } from "./style"

const Embed: React.FC<{ src: string }> = ({ src }) => {
  return <Container src={src} />
}

export default Embed
