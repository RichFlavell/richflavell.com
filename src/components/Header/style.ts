import MaterialIcon from "@material/react-material-icon"
import styled from "styled-components"
import media from "styled-media-query"
import { buttonStyle } from "../Button/style"

export const Container = styled.header`
  display: flex;
  padding: ${props => props.theme.spacing.lg} 0px;
  background-color: ${props => props.theme.palette.background.primary};
  color: ${props => props.theme.palette.text.primary};
  border-bottom: 2px solid ${props => props.theme.palette.border.secondary};
  align-items: center;
  margin: auto;
  width: 100%;
`

export const Inner = styled.div`
  max-width: 1280px;
  width: 75%;
  display: flex;
  margin: auto;
  align-items: center;

  @media (max-width: 60em) {
    width: 100%;
  }
`

export const HeaderOuterSection = styled.div`
  width: 33%;
  display: flex;
  margin: auto;
  align-items: center;
`

export const HeaderInnerSection = styled.div`
  width: 33%;
  display: flex;
  margin: auto;
  align-items: center;

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const SubscribeButton = styled.a`
  margin: 0px;
  margin-left: auto;
  ${buttonStyle}
`

export const Logo = styled.div`
  font-family: "Montserrat Alternates", cursive !important;
  font-weight: lighter;
  font-size: ${props => props.theme.size.logo};
  margin: auto;
  text-decoration: none;
  white-space: nowrap;
`

export const StyledIcon = styled(MaterialIcon)`
  margin-right: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.size.md};
`

export const MenuIcon = styled(MaterialIcon)`
  font-size: ${props => props.theme.size.md};
`
