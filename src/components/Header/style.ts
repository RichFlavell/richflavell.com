import MaterialIcon from "@material/react-material-icon"
import styled from "styled-components"
import media from "styled-media-query"
import Button from "../Button"

export const Container = styled.header`
  display: flex;
  padding: ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.palette.background.primary};
  color: ${props => props.theme.palette.text.primary};
  border-bottom: 2px solid ${props => props.theme.palette.border.secondary};
  align-items: center;
`

export const Inner = styled.div`
  width: 75%;
  display: flex;
  margin: auto;
  align-items: center;
`

export const HeaderOuterSection = styled.div`
  width: 12.5%;
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

export const SubscribeButton = styled(Button)`
  margin-left: auto;
`

export const Logo = styled.div`
  font-family: "Montserrat Alternates", cursive !important;
  font-weight: lighter;
  font-size: ${props => props.theme.size.logo};
  margin: auto;
  text-decoration: none;
`

export const StyledIcon = styled(MaterialIcon)`
  margin-right: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.size.md};
`

export const MenuIcon = styled(MaterialIcon)`
  font-size: ${props => props.theme.size.lg};
`
