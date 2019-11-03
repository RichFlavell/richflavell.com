import styled, { css } from "styled-components"

interface IContainerProps {
  width?: number
  height?: number
  align?: string
  round?: boolean
  clickable?: boolean
}
export const SharpContainer = styled.span<IContainerProps>`
  width: ${props => (props.width ? `${props.width}px` : "100%")};
  height: ${props => (props.height ? `${props.height}px` : "100%")};
  margin-top: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  overflow: hidden;

  ${props =>
    props.round &&
    css`
      border-radius: 50%;
    `}

  ${props =>
    props.align &&
    (props.align === "right" || props.align === "center") &&
    css`
      margin-left: auto;
    `}

  ${props =>
    props.align &&
    (props.align === "left" || props.align === "center") &&
    css`
      margin-right: auto;
    `}

  ${props =>
    props.clickable &&
    css`
      transition: all 0.2s linear;
      box-shadow: ${props.theme.palette.shadow.passive};
    `}

  &:hover {
    ${props =>
      props.clickable &&
      css`
        box-shadow: ${props.theme.palette.shadow.active};
        cursor: pointer;
      `} 
  }
`

export const SrcContainer = styled.img<IContainerProps>`
  width: ${props => (props.width ? `${props.width}px` : "100%")};
  height: ${props => (props.height ? `${props.height}px` : "100%")};
  margin-top: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
  overflow: hidden;

  ${props =>
    props.round &&
    css`
      border-radius: 50%;
    `}

  ${props =>
    props.align &&
    (props.align === "right" || props.align === "center") &&
    css`
      margin-left: auto;
    `}

  ${props =>
    props.align &&
    (props.align === "left" || props.align === "center") &&
    css`
      margin-right: auto;
    `}

  ${props =>
    props.clickable &&
    css`
      transition: all 0.2s linear;
      box-shadow: ${props.theme.palette.shadow.passive};
    `}

  &:hover {
    ${props =>
      props.clickable &&
      css`
        box-shadow: ${props.theme.palette.shadow.active};
        cursor: pointer;
      `} 
  }
`
