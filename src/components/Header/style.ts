import MaterialIcon from "@material/react-material-icon"
import styled, { css } from "styled-components"
import { media } from "../../config/style/global"

export const Container = styled.header<{ hidden?: boolean }>`
  display: flex;
  padding: ${props => props.theme.spacing.lg} 0px;
  background-color: ${props => props.theme.palette.background.primary};
  color: ${props => props.theme.palette.text.primary};
  align-items: center;
  margin: auto;
  width: 100%;

  ${props =>
    props.hidden &&
    css`
      display: none;
    `}
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

export const RightAction = styled.div<{ floating?: boolean }>`
  margin: auto;

  ${props =>
    props.floating &&
    css`
      position: fixed;
      top: ${props.theme.spacing.lg};
      right: ${props.theme.spacing.lg};
      z-index: 7;
    `}
`

export const LeftAction = styled.div<{ floating?: boolean }>`
  margin: auto;

  ${props =>
    props.floating &&
    css`
      position: fixed;
      top: ${props.theme.spacing.lg};
      left: ${props.theme.spacing.lg};
      z-index: 7;
    `}
`

export const Subtitle = styled.span`
  opacity: 0.5;
  ${media.lessThan("mobile")`
    display: none;
  `}
`
