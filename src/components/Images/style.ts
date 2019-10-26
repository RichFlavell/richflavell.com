import styled, { css } from "styled-components"

interface IContainerProps {
  width?: number
  height?: number
  align?: string
  round?: boolean
}
export const SharpContainer = styled.span<IContainerProps>`
  width: ${props => (props.width ? `${props.width}px` : "auto")};
  height: ${props => (props.height ? `${props.height}px` : "auto")};
  margin-top: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};

  ${props =>
    props.round &&
    css`
      border-radius: 50%;
      overflow: hidden;
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
`

export const SrcContainer = styled.img<IContainerProps>`
  width: ${props => (props.width ? `${props.width}px` : "auto")};
  height: ${props => (props.height ? `${props.height}px` : "auto")};
  margin-top: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};

  ${props =>
    props.round &&
    css`
      border-radius: 50%;
      overflow: hidden;
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
`
