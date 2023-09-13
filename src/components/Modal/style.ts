import styled, { css } from "styled-components"

type IWrapperProps = {
  isOpen: boolean
}
export const Wrapper = styled.section<IWrapperProps>`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: opacity 0.1s linear;
  display: flex;
  ${props =>
    props.isOpen
      ? css`
          opacity: 1;
          pointer-events: all;
        `
      : css`
          opacity: 0;
        `};
`

export const Container = styled.div`
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  margin: 0px ${props => props.theme.spacing.md};
  height: 450px;
  margin: auto;
  background-color: ${props => props.theme.palette.background.primary};
  color: ${props => props.theme.palette.text.primary};
  border-radius: ${props => props.theme.spacing.sm};
  display: flex;
  overflow: hidden;

  @media (max-width: 78em) {
    max-width: 90%;
  }
`
