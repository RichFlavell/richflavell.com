import Img, { FluidObject, GatsbyImageProps } from "gatsby-image"
import React from "react"
import { ImageSharpFluid } from "../../generated/graphql-types"
import safe from "../../utils/safe"
import { SharpContainer, SrcContainer } from "./style"

export interface IImageProps {
  width?: number
  height?: number
  align?: string
  round?: boolean
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
}: ISharpImgProps) => {
  return (
    <SharpContainer width={width} height={height} align={align} round={round}>
      <Img fluid={fluid} />
    </SharpContainer>
  )
}

interface ISrcImgProps extends IImageProps {
  src?: string
}

export const SrcImg = ({ width, align, round, src, height }: ISrcImgProps) => {
  return (
    <SrcContainer
      width={width}
      height={height}
      align={align}
      round={round}
      src={src}
    />
  )
}

// Any is used in due to the nature of generated graphql/sharp typings
// #TODO: Abstract typings
export const parseImage = (image: any) => {
  const { childImageSharp: c, publicURL } = safe(image)
  const { fluid: f } = safe(c)

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
      />
    ) : (
      <SrcImg
        width={width}
        round={round}
        align={align}
        height={height}
        src={publicURL || undefined}
      />
    )
}
