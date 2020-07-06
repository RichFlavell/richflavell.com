import MaterialIcon from "@material/react-material-icon"
import styled, { css } from "styled-components"
import Button from "../Button"
import { media } from "../../config/style/global"

export const Container = styled.header`
  display: flex;
  padding: ${props => props.theme.spacing.lg} 0px;
  background-color: ${props => props.theme.palette.background.primary};
  color: ${props => props.theme.palette.text.primary};
  align-items: center;
  margin: auto;
  width: 100%;
`

export const Inner = styled.div<{ alignCenter?: boolean }>`
  max-width: 90em;
  width: 95%;
  display: flex;
  margin: auto;

  ${props =>
    props.alignCenter &&
    css`
      text-align: center;
    `}

  @media (max-width: 60em) {
    width: 100%;
  }
`

export const SubscribeContainer = styled.div<{
  floating?: boolean
  hidden: boolean
}>`
  display: flex;
  margin-left: auto;
  align-items: center;
  opacity: 1;
  transition: opacity 0.2s linear;

  ${props =>
    props.floating &&
    css`
      position: fixed;
      bottom: ${props.theme.spacing.lg};
      right: ${props.theme.spacing.lg};
    `}

  ${props =>
    props.hidden &&
    css`
      opacity: 0;
    `}

  ${media.lessThan("mobile")`
    position: fixed;
    bottom: ${props => props.theme.spacing.lg};
    right: ${props => props.theme.spacing.lg};
  `}
`

export const SubscribeButton = styled(Button)`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-family: "Lato", Georgia, Serif;
  text-align: center;
  margin: 0px;
  margin-left: auto;
`

export const LogoContainer = styled.div<{ alignCenter?: boolean }>`
  display: flex;
  flex-direction: column;
  font-weight: lighter;
  font-style: italic;
  text-decoration: none;
  white-space: nowrap;
  fill: ${props => props.theme.palette.text.primary};
  font-size: ${props => props.theme.size.md};

  ${props =>
    props.alignCenter &&
    css`
      text-align: center;
      margin: auto;
    `}
  ${media.lessThan("mobile")`
    margin: auto;
  `}
`

export const StyledIcon = styled(MaterialIcon)`
  margin-right: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.size.md};
`

export const MenuIcon = styled(MaterialIcon)`
  font-size: ${props => props.theme.size.md};
`

export const ButtonIcon = styled(MaterialIcon)`
  margin-right: calc(${props => props.theme.spacing.sm} - 2px);
`

export const RightAction = styled.div`
  margin: auto;
`

export const LeftAction = styled.div`
  margin: auto;
`

export const Subtitle = styled.span`
  opacity: 0.5;
  ${media.lessThan("mobile")`
    display: none;
  `}
`
