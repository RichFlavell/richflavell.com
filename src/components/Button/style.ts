import styled from "styled-components"

export const Container = styled.button`
  padding: ${props => props.theme.spacing.xs};
  background-color: ${props => props.theme.palette.background.primary};
  color: ${props => props.theme.palette.text.primary};
  border: 2px solid ${props => props.theme.palette.border.primary};
  border-radius: ${props => props.theme.spacing.md};
`
