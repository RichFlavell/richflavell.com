import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  margin: auto auto 0px auto;
  width: 980px;
  border-top: 0.5px solid ${props => props.theme.palette.border.primary};
  padding: ${props => props.theme.spacing.md} 0px;
  font-size: ${props => props.theme.size.sm};
  font-weight: lighter;
  color: ${props => props.theme.palette.text.primary};
  line-height: ${props => props.theme.size.lg};
`
