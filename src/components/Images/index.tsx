import Img, { FluidObject, GatsbyImageProps } from "gatsby-image"
import React from "react"
import { ImageSharpFluid } from "../../generated/graphql-types"
import { SharpContainer, SrcContainer } from "./style"

export interface IImageProps {
  width?: number
  align?: string
  round?: boolean
}

interface IMDXSharpImgProps extends IImageProps, GatsbyImageProps {}

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

export const MDXSharpImg = ({
  width,
  align,
  round,
  fluid,
}: IMDXSharpImgProps) => {
  return (
    <SharpContainer width={width} align={align} round={round}>
      <Img fluid={fluid} />
    </SharpContainer>
  )
}

interface IMDXSrcImgProps extends IImageProps {
  src?: string
}

export const MDXSrcImg = ({ width, align, round, src }: IMDXSrcImgProps) => {
  return <SrcContainer width={width} align={align} round={round} src={src} />
}
