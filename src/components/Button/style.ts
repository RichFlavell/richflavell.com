import styled, { css } from "styled-components"

interface IContainerProps {
  borderless?: boolean
  compact?: boolean
}

export const buttonStyle = css<IContainerProps>`
  height: auto;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background-color: initial;
  color: ${props => props.theme.palette.text.primary};
  border: 0.75px solid ${props => props.theme.palette.text.primary};
  border-radius: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.size.sm};
  transition: color 0.1s linear;
  display: inline-flex;
  align-items: center;
  font-weight: lighter;

  &:hover {
    color: ${props => props.theme.palette.link.primary};
    border-color: ${props => props.theme.palette.link.primary};
  }

  ${props =>
    props.borderless &&
    css`
      border: none;
    `}

  ${props =>
    props.compact &&
    css`
      padding: 0px;
    `}
`

export const Container = styled.button<IContainerProps>`
  ${buttonStyle}
`
