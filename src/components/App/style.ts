import styled, { css } from "styled-components"

interface ILoadingWrapperProps {
  hidden: boolean
  background: string
}
export const LoadingWrapper = styled.div<ILoadingWrapperProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.background};
  transition: all 0.2s linear;
  z-index: 10;

  ${props =>
    props.hidden
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`
