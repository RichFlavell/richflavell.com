import React from "react"
import { globalHistory } from "@reach/router"
import { DiscussionEmbed } from "disqus-react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { format } from "timeago.js"
import { PostQuery } from "../../types/graphql"
import safe from "../../utils/safe"
import { Title } from "../../config/style/mdx"
import {
  Container,
  Header,
  Meta,
  MDXBody,
  FeaturedImageContainer,
  DisqusWrapper,
} from "./style"
import SEO from "../../utils/SEO"
import Img from "gatsby-image"
import ScrollProgress from "../../components/ScrollProgress"

interface IPostProps {
  data: PostQuery
}
const Post: React.FC<IPostProps> = ({ data }) => {
  const { frontmatter, body, timeToRead, excerpt, id, fields } = data.mdx!
  const {
    customHeading,
    title,
    featuredImage,
    date,
    description,
  } = frontmatter!

  const { slug } = fields!

  const disqusConfig = {
    shortname: "richflavell",
    config: { identifier: id, title, url: globalHistory.location.href },
  }

  function renderHeader() {
    return (
      <Header>
        <Title>{title}</Title>
        <Meta>
          <time dateTime={date || undefined}>{format(date!)}</time>{" "}
          <span>{"•"} </span>
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
        description={description || excerpt}
        image={safe(featuredImage).publicURL!}
        pathname={`${slug!}/`}
      />

      <ScrollProgress />

      <main>
        <Container>
          {!customHeading && renderHeader()}
          <MDXBody>
            {featuredImage && (
              <FeaturedImageContainer
                className={customHeading ? "i-s i-r" : "i-m i-f"}
              >
                {
                  // @ts-ignore
                  <Img fluid={featuredImage.childImageSharp.fluid} />
                }
              </FeaturedImageContainer>
            )}
            <MDXRenderer>{body}</MDXRenderer>
          </MDXBody>
          {!customHeading && (
            <DisqusWrapper>
              <DiscussionEmbed {...disqusConfig} />
            </DisqusWrapper>
          )}
        </Container>
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query Post($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        customHeading
        date
        description
        featuredImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 980, quality: 100, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Post
