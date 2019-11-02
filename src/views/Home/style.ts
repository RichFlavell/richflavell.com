import { Link } from "gatsby"
import ReactPlayer from "react-player"
import styled from "styled-components"

export const Holder = styled.main`
  padding: 0 ${props => props.theme.spacing.md};
`

export const SeeMoreLink = styled(Link)`
  font-weight: lighter;
  color: ${props => props.theme.palette.text.primary};
`

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  max-height: 720px;
  margin: auto;
  margin-top: ${props => props.theme.spacing.lg};
  border-radius: 4px;
  overflow: hidden;

  @media (min-width: 30em) {
    height: 720px;
  }

  @media (max-width: 60em) {
    height: auto;
    padding-top: 56.25%;
  }
`

export const Video = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 720px;
`
