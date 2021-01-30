import styled, { css } from "styled-components"

interface IContainerProps {
  isSidebarOpen: boolean
  isModalOpen: boolean
}
export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  background-color: ${props => props.theme.palette.background.primary};
  transition: all 0.1s linear;
  z-index: 1;
  backface-visibility: hidden;

  ${props =>
    props.isSidebarOpen || props.isModalOpen
      ? css`
          filter: brightness(66%);
          pointer-events: none;
        `
      : css`
          filter: none;
        `}
`
