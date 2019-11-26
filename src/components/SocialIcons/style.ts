import { OutboundLink } from "gatsby-plugin-google-analytics"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
`

export const IconContainer = styled.div`
  margin: 0px ${props => props.theme.spacing.lg};
  stroke: ${props => props.theme.palette.text.primary};
  transition: stroke 0.1s linear;
  position: relative;
  width: 24px;
  height: 24px;

  &:first-of-type {
    margin-left: 0px;
  }

  &:last-of-type {
    margin-right: 0px;
  }

  @media (max-width: 60em) {
    margin: 0px ${props => props.theme.spacing.md};
  }

  &:hover {
    cursor: pointer;
    svg {
      stroke: ${props => props.theme.palette.link.primary};
    }
  }
`

export const IconLink = styled(OutboundLink)`
  position: absolute;
  top: 0px;
  left: 0px;
`
