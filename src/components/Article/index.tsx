import React from "react"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Title } from "../../config/style/mdx"
import { ArticleQuery } from "../../generated/graphql-types"
import safe from "../../utils/safe"
import { parseImage } from "../Images"
import { Container, FeaturedImageContainer } from "./style"

interface IArticleProps {
  data: ArticleQuery
}
const Article: React.FC<IArticleProps> = ({ data }) => {
  const { frontmatter, body } = safe(data.mdx)
  const { customHeading, title, images, featuredImage } = safe(frontmatter)

  const parsedImages: { [key: string]: React.ReactNode } = {}
  if (images) {
    images.forEach((image, i) => {
      parsedImages[`image${i + 1}`] = parseImage(image)
    })
  }
  return (
    <main>
      {featuredImage && (
        <FeaturedImageContainer>
          {parseImage(featuredImage)()}
        </FeaturedImageContainer>
      )}
      <Container>
        {!customHeading && title && <Title>{title}</Title>}
        <MDXRenderer images={parsedImages}>{body}</MDXRenderer>
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
        customHeading
        images {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        featuredImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2160, maxHeight: 620, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Article
