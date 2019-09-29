import styled from "styled-components"

export const Container = styled.div`
  display: flex;
`

export const IconContainer = styled.div`
  padding: ${props => props.theme.spacing.md};
  &:hover {
    color: ${props => props.theme.palette.link.primary};
  }
`
