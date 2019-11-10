import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { Title } from "../../config/style/mdx"
import { Meta } from "../../views/Post/style"

interface IContainerProps {
  first: boolean
}
export const Container = styled.article<IContainerProps>`
  text-decoration: none;
  color: ${props => props.theme.palette.text.primary};
  box-shadow: ${props => props.theme.palette.shadow.passive};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s linear;

  ${props =>
    props.first &&
    css`
      @media (min-width: 60em) {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }
    `}

  &:hover {
    box-shadow: ${props => props.theme.palette.shadow.active};
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

  span {
    margin: auto ${props => props.theme.spacing.xs};
  }

  time {
    margin: auto ${props => props.theme.spacing.xs};
  }
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
