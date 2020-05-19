import styled, { css } from "styled-components"
import { media } from "../../config/style/global"

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin: auto;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xs};
`

export const DisqusWrapper = styled.div`
  max-width: 980px;
  margin: auto;
  width: 100%;
`

export const Meta = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: ${props => props.theme.size.md};
  opacity: 0.3;
  line-height: ${props => props.theme.size.lg};
  justify-content: center;

  span {
    margin: auto ${props => props.theme.spacing.xs};
  }

  time {
    margin: auto ${props => props.theme.spacing.xs};
    flex: 1;
    text-align: right;
  }

  span:last-of-type {
    flex: 1;
    text-align: left;
  }
`

const IMAGE_WIDTHS = {
  regular: "680px",
  large: "980px",
  full: "100vw",
}

const ARTICLE_WIDTH = css`
  width: 100%;
  max-width: 680px;

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
    max-width: 680px;
    left: -8px;

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

export const FeaturedImageContainer = styled.div`
  margin-bottom: 12.5vh !important;
`
