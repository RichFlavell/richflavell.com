import { Components } from "@mdx-js/react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: ${props => props.theme.size.xl};
  color: ${props => props.theme.palette.text.secondary};
  margin: auto;
  margin-bottom: ${props => props.theme.spacing.lg};
`

const SubTitle = styled.h2`
  font-size: ${props => props.theme.size.md};
  font-weight: lighter;
  color: ${props => props.theme.palette.text.primary};
  margin: auto;
  line-height: ${props => props.theme.size.lg};
`

export const components = {
  h1: Title,
  h2: SubTitle,
} as Components
