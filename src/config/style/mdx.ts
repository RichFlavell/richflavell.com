import { Components } from "@mdx-js/react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: ${props => props.theme.size.xl};
  color: ${props => props.theme.palette.text.primary};
  margin: auto;
`

const SubTitle = styled.h2`
  font-size: ${props => props.theme.size.sm};
  color: ${props => props.theme.palette.text.secondary};
  margin: auto;
`

export const components = {
  h1: Title,
  h2: SubTitle,
} as Components
