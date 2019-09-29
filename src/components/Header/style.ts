import styled from "styled-components"
import MaterialIcon from "@material/react-material-icon"

export const Container = styled.div`
  display: flex;
  margin: auto;
  padding: ${props => props.theme.spacing.lg};
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

export const HeaderSection = styled.div`
  width: 12.5%;
  display: flex;
  margin: auto;
  align-items: center;
`

export const Logo = styled.div`
  font-family: "Romanesco", cursive !important;
  font-size: ${props => props.theme.size.logo};
  margin: auto;
  text-decoration: none;
`

export const StyledIcon = styled(MaterialIcon)`
  font-size: ${props => props.theme.size.lg};
`

export const MenuIcon = styled(MaterialIcon)`
  font-size: ${props => props.theme.size.xl};
`
