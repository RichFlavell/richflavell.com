import styled, { css } from "styled-components"
import { media } from "../../config/style/global"

export default styled.div<{ even?: boolean; cascade?: boolean }>`
  width: 100%;
  max-width: 1126px;
  margin: ${props => props.theme.spacing.lg} auto;
  display: grid;

  grid-template-columns: ${props => (props.even ? "1fr 457px" : "457px 1fr")};
  grid-gap: ${props => props.theme.spacing.lg};
  grid-row-gap: 90px;

  ${props =>
    !props.cascade
      ? css`
          grid-template-columns: 1fr;
          grid-row-gap: 25px;
        `
      : css`
          ${media.lessThan("tablet")`
    grid-template-columns: 1fr 1fr;
  `}

          ${media.lessThan("mobile")`
    grid-template-columns: 1fr;
  `}
        `}
`
