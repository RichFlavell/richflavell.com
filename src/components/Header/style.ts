import MaterialIcon from "@material/react-material-icon"
import styled from "styled-components"
import { buttonStyle } from "../Button/style"

export const Container = styled.header`
  display: flex;
  padding: ${props => props.theme.spacing.lg} 0px;
  background-color: ${props => props.theme.palette.background.primary};
  color: ${props => props.theme.palette.text.primary};
  align-items: center;
  margin: auto;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.palette.background.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`

export const Inner = styled.div`
  max-width: 980px;
  width: 75%;
  display: flex;
  justify-content: center;

  @media (max-width: 60em) {
    width: 100%;
  }
`

export const HeaderOuterSection = styled.div`
  width: 25%;
  display: flex;
  margin: auto;
  align-items: center;
`

export const SubscribeButton = styled.a`
  margin: 0px;
  margin-left: auto;
  ${buttonStyle}
`

export const LogoContainer = styled.div`
  font-weight: lighter;
  font-size: ${props => props.theme.size.logo};
  text-decoration: none;
  white-space: nowrap;
  fill: ${props => props.theme.palette.text.primary};
`

export const StyledIcon = styled(MaterialIcon)`
  margin-right: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.size.md};
`

export const MenuIcon = styled(MaterialIcon)`
  font-size: ${props => props.theme.size.md};
`
