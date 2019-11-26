import React from "react"
import { Container, IconContainer, IconLink } from "./style"

import InstagramIcon from "../../icons/instagram.svg"
import TwitterIcon from "../../icons/twitter.svg"
import YouTubeIcon from "../../icons/youtube.svg"

const SocialIcons: React.FC = ({}) => {
  return (
    <Container>
      <IconContainer>
        <IconLink
          href="https://twitter.com/RichFlavell"
          rel="me"
          target="_blank"
        >
          <TwitterIcon width="24" height="24" />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://www.youtube.com/channel/UCkn9NAYvOJxHZv1ygEV1tsg"
          rel="me"
          target="_blank"
        >
          <YouTubeIcon width="24" height="24" />
        </IconLink>
      </IconContainer>
      <IconContainer>
        <IconLink
          href="https://instagram.com/RichFlavell"
          rel="me"
          target="_blank"
        >
          <InstagramIcon width="24" height="24" />
        </IconLink>
      </IconContainer>
    </Container>
  )
}

export default SocialIcons
