import { Link } from "gatsby"
import styled from "styled-components"
import { Title } from "../../config/style/mdx"
import { Meta } from "../../views/Article/style"

export const Container = styled.article`
  text-decoration: none;
  color: ${props => props.theme.palette.text.primary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease;
  top: 0px;

  &:first-of-type {
    @media (min-width: 60em) {
      grid-column: 1 / span 3;
      grid-row: 1 / span 2;
    }
  }

  &:hover {
    top: -1px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.palette.text.primary};
  }
`

export const CardTitle = styled(Title)`
  margin: auto;
  text-align: center;
  font-size: ${props => props.theme.size.md};
`

export const CardMeta = styled(Meta)`
  margin: auto;
  text-align: center;
  font-size: ${props => props.theme.size.sm};
`

export const Details = styled.div`
  width: 100%;
  background: ${props => props.theme.palette.background.primary};
  position: absolute;
  bottom: 0px;
  padding: ${props => props.theme.spacing.md};
`
export const LinkWrapper = styled(Link)`
  width: 100%;
  height: 100%;
`
