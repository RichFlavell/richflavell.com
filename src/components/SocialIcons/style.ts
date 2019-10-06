import styled from "styled-components"

export const Container = styled.div`
  display: flex;
`

export const IconContainer = styled.div`
  padding: ${props => props.theme.spacing.md};
  stroke: ${props => props.theme.palette.text.primary};
  transition: stroke 0.1s linear;
  &:hover {
    cursor: pointer;
    svg {
      stroke: ${props => props.theme.palette.link.primary};
    }
  }
`

export const IconLink = styled.a``
