import Img, { FluidObject, GatsbyImageProps } from "gatsby-image"
import React from "react"
import { ImageSharpFluid } from "../../types/graphql-types"
import safe from "../../utils/safe"
import { SharpContainer, SrcContainer } from "./style"

export interface IImageProps {
  width?: number
  height?: number
  align?: string
  round?: boolean
  callback?: () => void
}

export interface IParsedImageProps {
  callback?: () => void
}

interface ISharpImgProps extends IImageProps, GatsbyImageProps {}

export const safeFluid = (
  f: ImageSharpFluid | FluidObject | null
): FluidObject => {
  return {
    aspectRatio: f ? f.aspectRatio || 1 : 1,
    sizes: f ? f.sizes || "" : "",
    src: f ? f.src || "" : "",
    srcSet: f ? f.srcSet || "" : "",
    tracedSVG: f ? f.tracedSVG || "" : "",
  }
}

export const SharpImg = ({
  width,
  align,
  round,
  fluid,
  height,
  callback,
}: ISharpImgProps) => {
  return (
    <SharpContainer
      width={width}
      height={height}
      align={align}
      round={round}
      onClick={callback}
      clickable={!!callback}
    >
      <Img fluid={fluid} draggable={false} />
    </SharpContainer>
  )
}

interface ISrcImgProps extends IImageProps {
  src?: string
  callback?: () => void
}

export const SrcImg = ({
  width,
  align,
  round,
  src,
  height,
  callback,
}: ISrcImgProps) => {
  return (
    <SrcContainer
      width={width}
      height={height}
      align={align}
      round={round}
      src={src}
      onClick={callback}
      clickable={!!callback}
    />
  )
}

// Any is used in due to the nature of generated graphql/sharp typings
// #TODO: Abstract typings
export const parseImage = (image: any) => {
  const { childImageSharp: c, publicURL } = safe(image)
  const { fluid: f } = safe(c)

  return (callback?: () => void) => {
    return ({
      width,
      round = false,
      align = "center",
      height,
    }: IImageProps = {}) =>
      f ? (
        <SharpImg
          width={width}
          round={round}
          align={align}
          height={height}
          fluid={safeFluid(f)}
          callback={callback}
        />
      ) : (
        <SrcImg
          width={width}
          round={round}
          align={align}
          height={height}
          src={publicURL || undefined}
          callback={callback}
        />
      )
  }
}
