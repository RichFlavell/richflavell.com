import styled from "styled-components"
import { media } from "../../config/style/global"

export const Holder = styled.footer`
  flex-grow: 1;
  align-self: center;
  align-items: flex-end;
  display: flex;
  width: 100%;
  max-width: 980px;

  ${media.lessThan("tablet")`
    padding: 0px ${props => props.theme.spacing.md}
  `};
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-top: 0.5px solid ${props => props.theme.palette.border.primary};
  padding: ${props => props.theme.spacing.md} 0px;
  font-size: ${props => props.theme.size.sm};
  font-weight: lighter;
  color: ${props => props.theme.palette.text.primary};
  line-height: ${props => props.theme.size.lg};
  margin-top: ${props => props.theme.spacing.lg};

  @media (max-width: 30em) {
    flex-direction: column;
    align-items: center;

    div {
      margin: auto;
    }
  }
`
