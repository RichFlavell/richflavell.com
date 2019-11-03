import React, { useState } from "react"
import { globalHistory } from "@reach/router"
import { DiscussionEmbed } from "disqus-react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { format } from "timeago.js"
import { ArticleQuery } from "../../types/graphql-types"
import safe from "../../utils/safe"
import { parseImage } from "../../components/Images"
import { Title } from "../../config/style/mdx"
import { Container, FeaturedImageContainer, Header, Meta } from "./style"
import SEO from "../../utils/SEO"

interface IArticleProps {
  data: ArticleQuery
}
const Article: React.FC<IArticleProps> = ({ data }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const { frontmatter, body, timeToRead, excerpt, id } = safe(data.mdx)
  const { customHeading, title, images, featuredImage, date } = safe(
    frontmatter
  )

  const disqusConfig = {
    shortname: "richflavell",
    config: { identifier: id, title, url: globalHistory.location.href },
  }

  const parsedImages: { [key: string]: React.ReactNode } = {}
  if (images) {
    images.forEach((image, i) => {
      parsedImages[`image${i + 1}`] = parseImage(image)(() =>
        console.log("HERE")
      )
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
    <>
      <SEO
        title={title}
        article={true}
        description={excerpt}
        image={safe(featuredImage).publicURL!}
      />
      <main>
        {featuredImage && (
          <FeaturedImageContainer>
            {parseImage(featuredImage)()()}
          </FeaturedImageContainer>
        )}
        <Container>
          {!customHeading && renderHeader()}
          <MDXRenderer images={parsedImages}>{body}</MDXRenderer>
          {!customHeading && <DiscussionEmbed {...disqusConfig} />}
        </Container>
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query Article($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      excerpt
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
