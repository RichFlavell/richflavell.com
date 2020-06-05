import styled, { css, keyframes } from "styled-components"
import { media } from "../../config/style/global"
import { Title } from "../../config/style/mdx"
import { Link } from "gatsby"
import MaterialIcon from "@material/react-material-icon"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin: auto;
`

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    transparent 1%,
    rgba(0, 0, 0, 0.2) 26%,
    rgba(0, 0, 0, 0.5) 66%,
    rgba(0, 0, 0, 0.6) 100%
  );

  & > ${Title} {
    color: ${props => props.theme.palette.white};
  }
`

export const DisqusWrapper = styled.div`
  max-width: 90em;
  margin: auto;
  width: 75%;
`

const IMAGE_WIDTHS = {
  regular: "700px",
  large: "980px",
  full: "100vw",
}

const ARTICLE_WIDTH = css`
  width: 100%;
  max-width: 700px;

  ${media.lessThan("desktop")`
    max-width: 507px;
  `}

  ${media.lessThan("tablet")`
    max-width: 486px;
  `};

  ${media.lessThan("mobile")`
    padding: 0 20px;
  `};
`

const HeadingsCSS = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 auto;
  }

  h1,
  h1 *,
  h2,
  h2 * {
    margin: 25px auto 18px;

    ${media.lessThan("tablet")`
      margin: 30px auto 18px;
    `};
  }

  h3,
  h3 * {
    margin: 20px auto 10px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${ARTICLE_WIDTH};
  }
`

const ImageCSS = css`
  img {
    display: inline-block;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;

    ${media.lessThan("desktop")`
      margin: 10px auto 45px;
    `};
  }

  div.i-r {
    border-radius: 50% !important;
    overflow: hidden;
    margin-bottom: ${props => props.theme.spacing.md} !important;
    max-width: 320px !important;
    padding: 0px !important;

    img {
      margin: 0px !important;
    }
  }

  div.i-f {
    margin-bottom: ${props => props.theme.spacing.xl} !important;
  }

  div.i-s {
    display: inline-block;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;
    width: 100%;
    max-width: 700px;
    left: -8px;
    text-align: center;

    span.caption {
      display: block;
      margin-top: ${props => props.theme.spacing.sm};
      font-family: "Merriweather", Georgia, Serif;
      color: ${props => props.theme.palette.text.secondary};
      font-size: ${props => props.theme.size.xs};
      font-style: italic;
    }

    ${media.greaterThan("tablet")`
      margin: 10px auto 45px;
    `};

    ${media.lessThan("tablet")`
      max-width: 507px;
    `}

    ${media.lessThan("tablet")`
      max-width: 486px;
      margin: 0 auto 25px;
    `};

    ${media.lessThan("mobile")`
      padding: 0 20px;
    `};
  }

  div.i-m {
    position: relative;
    margin: 15px auto 50px;
    width: 100%;
    max-width: ${IMAGE_WIDTHS.large};

    ${media.greaterThan("desktop")`
      left: -34px;
    `};

    ${media.greaterThan("tablet")`
      left: 0px;
    `};

    ${media.lessThan("tablet")`
      border-radius: 0;
      left: 0;
      margin: 0 auto 25px;

      img {
        border-radius: 0;
      }
    `};
  }

  div.i-l {
    position: relative;
    width: ${IMAGE_WIDTHS.full};
    margin: 25px auto 60px;
    pointer-events: none;

    img {
      border-radius: 0;
    }

    ${media.lessThan("desktop")`
      margin: 0 auto 25px;
    `};
  }
`

export const MDXBody = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  ${HeadingsCSS}
  ${ImageCSS}
`

export const Hero = styled.div`
  min-height: 720px;
  width: 100vw;
  height: 100vh;
  max-width: initial !important;
  margin: 0 !important;
  border-radius: 0 !important;

  img {
    margin: 0 !important;
    border-radius: 0 !important;
  }
`

export const Subtitle = styled.span`
  font-family: "Merriweather", Georgia, Serif;
  color: ${props => props.theme.palette.white};
  font-weight: lighter;
  font-style: italic;
  font-size: ${props => props.theme.size.lg};
  max-width: 80%;
  text-align: center;
  margin: auto;
`

export const TimeHolder = styled.h2`
  display: flex;
  font-weight: 500;
  position: absolute;
  font-size: ${props => props.theme.size.md};
  line-height: ${props => props.theme.size.lg};
  justify-content: center;
  color: ${props => props.theme.palette.white};
  font-weight: lighter;
  font-style: italic;
  font-size: ${props => props.theme.size.md};
  bottom: ${props => props.theme.spacing.md};
  animation: ${fadeIn} 3s ease-in;

  span {
    margin: auto ${props => props.theme.spacing.xs} !important;
  }

  time {
    margin: auto ${props => props.theme.spacing.xs} !important;
    flex: 1;
    text-align: right;
  }

  span:last-of-type {
    flex: 1;
    text-align: left;
  }
`

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 50%;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: 4px;
  animation: ${fadeIn} 2s ease-in;
  width: 100%%;

  & > ${Title} {
    color: ${props => props.theme.palette.white};
  }

  ${media.lessThan("tablet")`
      max-width: 75%;
  `};

  ${media.lessThan("mobile")`
      max-width: 95%;
  `};
`

export const HomeLink = styled(Link)`
  position: absolute;
  text-align: center;
  padding: ${props => props.theme.spacing.xs} 12px;
  top: ${props => props.theme.spacing.md};
  left: ${props => props.theme.spacing.md};
  font-weight: bold;
  text-transform: uppercase;

  font-size: ${props => props.theme.size.sm};
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${props => props.theme.palette.white};

  animation: ${fadeIn} 1s ease;
`

export const ScrollPromptIcon = styled(MaterialIcon)`
  position: absolute;

  font-size: ${props => props.theme.size.logo};
  color: rgba(255, 255, 255, 0.7);
  bottom: 12px;
  right: ${props => props.theme.spacing.md};
  transition: color 0.2s linear;

  animation: ${fadeIn} 6s ease-in;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.link.primary};
  }
`

export const MDXContainer = styled.div`
  display: grid;
`
