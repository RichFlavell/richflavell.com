import styled from "styled-components"
import { Heading, Title } from "../../config/style/mdx"

export const Actions = styled.div`
  margin-top: auto;
  display: flex;
`

export const PageHeading = styled(Heading)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${props => props.theme.spacing.md};
`

export const PageTitle = styled(Title)`
  margin: 0px;
`

export const PageCount = styled.div`
  margin-left: auto;
  margin-top: auto;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: lighter;
  color: ${props => props.theme.palette.text.primary};
`
