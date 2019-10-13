import styled, { css } from "styled-components"

interface IContainerProps {
  isSidebarOpen: boolean
}
export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.palette.background.secondary};
  transition: all 0.1s linear;
  z-index: 1;
  ${props =>
    props.isSidebarOpen
      ? css`
          filter: brightness(75%);
        `
      : css`
          filter: none;
        `}
`
