import styled, { css } from "styled-components"
import { Title } from "../../config/style/mdx"
import { Meta } from "../../views/Post/style"
import { Link } from "gatsby"
import { media } from "../../config/style/global"

interface IContainerProps {
  cascade?: boolean
}
export const Container = styled.article<IContainerProps>`
  text-decoration: none;
  color: ${props => props.theme.palette.text.primary};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  position: relative;
  transition: all 0.2s linear;

  ${props =>
    props.cascade
      ? css`
          max-width: 653px;
        `
      : css`
          margin-top: ${props.theme.spacing.lg};
        `}
`

export const CardTitle = styled(Title)<IContainerProps>`
  text-align: left;
  font-size: ${props => props.theme.size.md};
  transition: color 0.2s linear;
`

export const CardMeta = styled(Meta)`
  text-align: left;
  display: block;
  font-weight: 600;
  font-size: ${props => props.theme.size.sm};
  opacity: 0.3;
  span {
    margin: auto ${props => props.theme.spacing.xs};
  }

  time {
    margin: auto ${props => props.theme.spacing.xs};
  }
`

export const Details = styled.div`
  width: 100%;
  margin-top: ${props => props.theme.spacing.lg};
`

export const CardImage = styled.div<{ cascade?: boolean }>`
  transition: all 0.2s linear;
  overflow: hidden;
  box-shadow: ${props => props.theme.palette.shadow.passive};
  height: 280px;
  ${props =>
    !props.cascade &&
    css`
      min-width: 45%;
      height: 180px;
      margin-right: ${props.theme.spacing.lg};
    `}

  ${media.lessThan("mobile")`
    height: 100%;
    margin-right: 0px;
    width: 100%;
  `};
`

export const LinkWrapper = styled(Link)<{ cascade?: number }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => (props.cascade ? "column" : "row")};

  ${props =>
    !props.cascade &&
    css`
      align-items: center;
    `};

  ${media.lessThan("mobile")`
    flex-direction: column;
  `};

  &:hover {
    color: ${props => props.theme.palette.text.primary} !important;

    ${CardTitle} {
      color: ${props => props.theme.palette.link.primary} !important;
    }

    ${CardImage} {
      box-shadow: ${props => props.theme.palette.shadow.active};
    }
  }
`

export const CardExcerpt = styled.span`
  display: block;
  width: 95%;
  color: ${props => props.theme.palette.text.secondary};
  margin-bottom: ${props => props.theme.spacing.sm};
`
