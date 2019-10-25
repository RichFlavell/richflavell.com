import React from "react"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ArticleQuery } from "../../generated/graphql-types"
import safe from "../../utils/safe"
import { IImageProps, MDXSharpImg, MDXSrcImg, safeFluid } from "../Images"
import { Container } from "./style"

interface IArticleProps {
  data: ArticleQuery
}
const Article: React.FC<IArticleProps> = ({ data }) => {
  const { frontmatter, body } = safe(data.mdx)
  const { images } = safe(frontmatter)

  const imgs: { [k: string]: React.ReactNode } = {}
  if (images) {
    images.forEach((image, i) => {
      const { childImageSharp: c, publicURL } = safe(image)
      const { fluid: f } = safe(c)
      imgs[`image${i + 1}`] = ({
        width,
        round,
        align = "center",
      }: IImageProps) =>
        f ? (
          <MDXSharpImg
            width={width}
            round={round}
            align={align}
            fluid={safeFluid(f)}
          />
        ) : (
          <MDXSrcImg
            width={width}
            round={round}
            align={align}
            src={publicURL || undefined}
          />
        )
    })
  }
  return (
    <main>
      <Container>
        <MDXRenderer images={imgs}>{body}</MDXRenderer>
      </Container>
    </main>
  )
}

export const pageQuery = graphql`
  query Article($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        images {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Article
