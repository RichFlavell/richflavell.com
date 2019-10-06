import React from "react"
import { Container, IconContainer, IconLink } from "./style"

const FacebookIcon = require("../../icons/facebook.svg")
const TwitterIcon = require("../../icons/twitter.svg")
const InstagramIcon = require("../../icons/instagram.svg")
const YouTubeIcon = require("../../icons/youtube.svg")

const SocialIcons: React.FC = ({}) => {
  return (
    <Container>
      <IconContainer>
        <IconLink
          href="https://facebook.com/Rich.Flavell.9"
          rel="me"
          target="_blank"
        >
          <FacebookIcon />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://twitter.com/RichFlavell"
          rel="me"
          target="_blank"
        >
          <TwitterIcon />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://instagram.com/RichFlavell"
          rel="me"
          target="_blank"
        >
          <InstagramIcon />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://youtube.com/c/RichFlavell"
          rel="me"
          target="_blank"
        >
          <YouTubeIcon />
        </IconLink>
      </IconContainer>
    </Container>
  )
}

export default SocialIcons
