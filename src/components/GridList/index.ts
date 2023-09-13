import styled, { css } from "styled-components"

export default styled.div<{ even?: boolean; cascade?: boolean }>`
  width: 95%;
  max-width: 90em;
  margin: ${props => props.theme.spacing.lg} auto;
  display: grid;

  grid-template-columns: ${props => (props.even ? "1fr 45%" : "45% 1fr")};
  grid-gap: ${props => props.theme.spacing.lg};
  grid-row-gap: 90px;

  @media (max-width: 46em) {
    margin-top: 0px;
    grid-row-gap: 24px;
  }

  ${props =>
    !props.cascade
      ? css`
          grid-template-columns: 1fr;
          grid-row-gap: 25px;
        `
      : css`
          @media (max-width: 60em) {
            grid-template-columns: 1fr 1fr;
          }
          @media(max-width: 46em) {
            grid-template-columns: 1fr;
          }
        `}
`
