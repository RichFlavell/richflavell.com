import React from "react"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { format } from "timeago.js"
import { Title } from "../../config/style/mdx"
import { ArticleQuery } from "../../generated/graphql-types"
import safe from "../../utils/safe"
import { parseImage } from "../Images"
import { Container, FeaturedImageContainer, Header, Meta } from "./style"

interface IArticleProps {
  data: ArticleQuery
}
const Article: React.FC<IArticleProps> = ({ data }) => {
  const { frontmatter, body, timeToRead } = safe(data.mdx)
  const { customHeading, title, images, featuredImage, date } = safe(
    frontmatter
  )

  const parsedImages: { [key: string]: React.ReactNode } = {}
  if (images) {
    images.forEach((image, i) => {
      parsedImages[`image${i + 1}`] = parseImage(image)
    })
  }
  function renderHeader() {
    return (
      <Header>
        <Title>{title}</Title>
        <Meta>
          <span>{format(date!)}</span> <span>{" • "} </span>
          <span>{timeToRead} min read</span>
        </Meta>
      </Header>
    )
  }

  return (
    <main>
      {featuredImage && (
        <FeaturedImageContainer>
          {parseImage(featuredImage)()}
        </FeaturedImageContainer>
      )}
      <Container>
        {!customHeading && renderHeader()}
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
      timeToRead
      frontmatter {
        title
        customHeading
        date
        images {
          publicURL
          childImageSharp {
            fluid(maxWidth: 980, quality: 100) {
              ...GatsbyImageSharpFluid
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
