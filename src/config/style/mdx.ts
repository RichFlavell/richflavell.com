import { Components } from "@mdx-js/react"
import styled from "styled-components"

export const Title = styled.h1`
  font-size: ${props => props.theme.size.xl};
  color: ${props => props.theme.palette.text.secondary};
  margin: auto;
  margin-bottom: ${props => props.theme.spacing.md};
`

export const SubTitle = styled.h2`
  font-size: ${props => props.theme.size.md};
  font-weight: lighter;
  color: ${props => props.theme.palette.text.primary};
  margin: auto;
  line-height: ${props => props.theme.size.lg};
`

export const Body = styled.p`
  font-weight: lighter;
  line-height: ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.size.md};
  color: ${props => props.theme.palette.text.secondary};
  max-width: 980px;
  margin: auto;
  margin-top: ${props => props.theme.spacing.lg};
`

export const components = {
  h1: Title,
  h2: SubTitle,
  p: Body,
} as Components
