import React from "react"
import { Container } from "./style"

const MapEmbed: React.FC<{ src: string }> = ({ src }) => {
  return <Container src={src} />
}

export default MapEmbed
