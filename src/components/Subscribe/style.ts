import styled, { css } from "styled-components"
import { media } from "../../config/style/global"
import MaterialIcon from "@material/react-material-icon"
import Button from "../Button"
import { Title } from "../../config/style/mdx"

export const SubscribeContainer = styled.div<{
  floating?: boolean
  hidden: boolean
}>`
  display: flex;
  margin-left: auto;
  align-items: center;
  opacity: 1;
  transition: opacity 0.2s linear;
  z-index: 7;

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

export const SubscribeButton = styled(Button)<{ subscribed?: boolean }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  text-align: center;
  margin: 0px;
  margin-left: auto;
  background-color: ${props => props.theme.palette.background.primary}E0;

  ${props =>
    props.subscribed &&
    css`
      color: #53a653;
      border-color: #53a653;

      &:hover {
        color: #b00020;
        border-color: #b00020;
      }
    `}
`

export const ButtonIcon = styled(MaterialIcon)`
  margin-right: calc(${props => props.theme.spacing.sm} - 2px);
`

export const LeftContent = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-right: auto;
  background-color: ${props => props.theme.palette.white};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");

  ${media.lessThan("mobile")`
    display: none;
  `}

  ${props =>
    props.isDark &&
    css`
      filter: invert(1);
    `}
`

export const RightContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-left: auto;

  ${media.lessThan("mobile")`
    width: 100%;
  `}
`

export const SendIcon = styled(MaterialIcon)`
  opacity: 0.75;
  font-size: 24rem;
  transform: rotate3d(1, 1, 1, -62deg);
  filter: invert(1);
  margin-left: 72px;
  margin-bottom: 72px;
`

export const StyledInput = styled.input`
  margin: ${props => props.theme.spacing.sm} auto;
  margin-bottom: ${props => props.theme.spacing.lg};
  height: ${props => props.theme.spacing.lg};
  position: relative;
  border: none;
  border-radius: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.size.md};
  background-color: transparent;
  color: ${props => props.theme.palette.text.secondary};
  outline: none;
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
    0.1s padding ease-in-out;
  -webkit-appearance: none;
  border-bottom: 2px solid ${props => props.theme.palette.background.secondary};
  padding: ${props => props.theme.spacing.md};
  font-family: "Merriweather", Georgia, Serif;

  &:focus {
    background-color: ${props => props.theme.palette.background.secondary};
    box-shadow: 0 4px 6px -6px ${props => props.theme.palette.background.secondary};
  }
`

export const StyledTitle = styled(Title)`
  margin: 0px;
`

export const CloseIcon = styled(MaterialIcon)`
  position: absolute;
  right: ${props => props.theme.spacing.md};
  top: ${props => props.theme.spacing.md};
  cursor: pointer;
  transition: color 0.1s linear;

  &:hover {
    color: ${props => props.theme.palette.link.primary};
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const Disclaimer = styled.span`
  position: absolute;
  bottom: ${props => props.theme.spacing.md};
  display: block;
  margin-top: ${props => props.theme.spacing.sm};
  font-family: "Merriweather", Georgia, Serif;
  color: ${props => props.theme.palette.text.secondary};
  font-size: ${props => props.theme.size.xs};
  font-style: italic;
  text-align: center;
`
