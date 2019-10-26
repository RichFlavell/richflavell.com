import React from "react"
import { Container, IconContainer, IconLink } from "./style"

const TwitterIcon = require("../../icons/twitter.svg")
const InstagramIcon = require("../../icons/instagram.svg")
const YouTubeIcon = require("../../icons/youtube.svg")

const SocialIcons: React.FC = ({}) => {
  return (
    <Container>
      <IconContainer>
        <IconLink
          href="https://twitter.com/RichFlavell"
          rel="me"
          target="_blank"
        >
          <TwitterIcon width="34" height="34" />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://instagram.com/RichFlavell"
          rel="me"
          target="_blank"
        >
          <InstagramIcon width="34" height="34" />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://www.youtube.com/channel/UCkn9NAYvOJxHZv1ygEV1tsg"
          rel="me"
          target="_blank"
        >
          <YouTubeIcon width="34" height="34" />
        </IconLink>
      </IconContainer>
    </Container>
  )
}

export default SocialIcons
