import { Components } from "@mdx-js/react"
import styled from "styled-components"

export const Content = styled.main`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 980px;
  flex-direction: column;
`

export const Heading = styled.header`
  margin-right: auto;
  width: 100%;
  border-bottom: 0.5px solid ${props => props.theme.palette.border.primary};
`

export const Title = styled.h1`
  font-size: ${props => props.theme.size.xl};
  color: ${props => props.theme.palette.text.secondary};
  margin: auto;
  margin-bottom: ${props => props.theme.spacing.md};
  font-weight: lighter;
`

export const SubTitle = styled.h2`
  font-size: ${props => props.theme.size.md};
  font-weight: lighter;
  color: ${props => props.theme.palette.text.primary};
  margin: auto;
  line-height: ${props => props.theme.size.lg};
`

export const SectionTitle = styled.h3`
  font-size: ${props => props.theme.size.lg};
`

export const SectionInnerTitle = styled.h4`
  margin-top: ${props => props.theme.spacing.md};
`

export const Body = styled.p`
  font-weight: lighter;
  line-height: ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.size.md};
  color: ${props => props.theme.palette.text.secondary};
  max-width: 980px;
  margin: ${props => props.theme.spacing.md} 0px;
`

export const Center = styled.div`
  margin-left: auto;
  margin-right: auto;
`

export const Right = styled.div`
  margin-left: auto;
`

export const Left = styled.div`
  margin-right: auto;
`

export const components = {
  h1: Title,
  h2: SubTitle,
  h3: SectionTitle,
  h4: SectionInnerTitle,
  p: Body,
} as Components
