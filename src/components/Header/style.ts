import styled from "styled-components"
import Button from "../Button"

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  padding: ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.palette.background.primary};
  color: ${props => props.theme.palette.text.primary};
  border-bottom: 2px solid ${props => props.theme.palette.border.primary};
`

export const Inner = styled.div`
  width: 75%;
  display: flex;
  margin: auto;
`

export const Logo = styled.div`
  font-family: "Romanesco", cursive !important;
  font-size: ${props => props.theme.size.xl};
  margin: auto;
  text-decoration: none;
`

export const SubscribeButton = styled(Button)``
