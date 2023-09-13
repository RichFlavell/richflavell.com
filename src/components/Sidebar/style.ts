import styled, { css } from "styled-components"

import { Link } from "gatsby"
import Button from "../Button"

type IContainerProps = {
  isOpen: boolean
}
export const Container = styled.section<IContainerProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  max-width: 300px;
  width: 75%;
  height: 100%;
  background-color: ${props => props.theme.palette.background.primary};
  transition: all 0.2s linear;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  padding-bottom: 0px;
  color: ${props => props.theme.palette.text.primary};
  backface-visibility: hidden;
  ${props =>
    props.isOpen
      ? css`
          transform: translate3d(0, 0, 0);
        `
      : css`
          transform: translate3d(-100%, 0, 0);
        `};
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.sm};
  border-bottom: 1px solid ${props => props.theme.palette.background.secondary};
`

export const ActionButton = styled(Button)`
  padding-left: 0px;
  padding-right: 0px;
  margin-left: auto;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`

export const Items = styled.ul`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.sm};
`

export const Item = styled.li`
  font-size: ${props => props.theme.size.sm};

  border-bottom: 1px solid ${props => props.theme.palette.background.secondary};
  font-family: "Lato", sans-serif;
`

export const MenuLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: ${props => props.theme.spacing.md} 0px;
`

export const ActionsTitle = styled.h1`
  font-family: "Lato", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  white-space: pre;
  fill: ${props => props.theme.palette.text.primary};

  @media (max-width: 46em) {
  margin: inherit;
    margin-right: auto !important;
  }

  a {
  display: flex;
  justify-content: center;

    &:hover {
    cursor: pointer;
      svg {
      fill: ${props => props.theme.palette.link.primary};
    }
  }
}
`
