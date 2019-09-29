import React from "react"
import { Container, IconContainer } from "./style"

const Facebook = require("../../icons/facebook.svg")
const Twitter = require("../../icons/twitter.svg")
const Instagram = require("../../icons/instagram.svg")
const YouTube = require("../../icons/youtube.svg")

const SocialIcons: React.FC = ({}) => {
  return (
    <Container>
      <IconContainer>
        <Facebook />
      </IconContainer>
      <IconContainer>
        <Twitter />
      </IconContainer>
      <IconContainer>
        <Instagram />
      </IconContainer>
      <IconContainer>
        <YouTube />
      </IconContainer>
    </Container>
  )
}

export default SocialIcons
