import styled, { css } from "styled-components"

interface IContainerProps {
  isOpen: boolean
}
export const Container = styled.div<IContainerProps>`
  position: fixed;
  z-index: 2;
  width: 300px;
  height: 100%;
  background-color: ${props => props.theme.palette.background.primary};
  transition: all 0.1s linear;
  padding: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.palette.text.primary};
  ${props =>
    props.isOpen
      ? css`
          transform: translate3d(0, 0, 0);
        `
      : css`
          transform: translate3d(-100%, 0, 0);
        `};
`
