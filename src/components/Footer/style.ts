import styled from "styled-components"

export const Holder = styled.footer`
  flex-grow: 1;
  align-self: center;
  align-items: flex-end;
  display: flex;
  width: 100%;
  max-width: 1440px;
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
`
