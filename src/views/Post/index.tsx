import React, { useLayoutEffect } from "react"
import { globalHistory, navigate } from "@reach/router"
import { DiscussionEmbed } from "disqus-react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { format } from "timeago.js"
import { PostQuery } from "../../types/graphql"
import safe from "../../utils/safe"
import { Title } from "../../config/style/mdx"
import {
  Container,
  Meta,
  TimeHolder,
  MDXBody,
  Hero,
  DisqusWrapper,
  Subtitle,
  MetaContainer,
  HomeLink,
  ScrollPromptIcon,
  MDXContainer,
} from "./style"
import SEO from "../../utils/SEO"
import Img from "gatsby-image"
import ScrollProgress from "../../components/ScrollProgress"
import { useTranslation } from "react-i18next"
import Header from "../../components/Header"

interface IPostProps {
  data: PostQuery
}
const Post: React.FC<IPostProps> = ({ data }) => {
  const { t } = useTranslation("Sidebar")
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

  useLayoutEffect(() => {
    const wrappers = document.querySelectorAll(".gatsby-resp-image-wrapper")

    wrappers.forEach(wrapper => {
      const img = wrapper.querySelector("img")
      const placeholder = wrapper.querySelector("span")

      img!.addEventListener("load", () => (placeholder!.style.opacity = "0"))
    })
  }, [])

  return (
    <>
      <SEO
        title={title}
        article={true}
        description={description || excerpt}
        image={safe(featuredImage).publicURL!}
        pathname={`${slug!}/`}
      />

      {customHeading && <Header alignCenter={true} />}

      <ScrollProgress />

      <main>
        <Container>
          <MDXBody>
            {featuredImage && !customHeading && (
              <Hero className={"i-m i-f"}>
                <Meta>
                  <HomeLink to="/">{t("home")}</HomeLink>
                  <MetaContainer>
                    <Title>{title}</Title>
                    <Subtitle>{description || excerpt}</Subtitle>
                  </MetaContainer>
                  <TimeHolder>
                    <time dateTime={date || undefined}>{format(date!)}</time>{" "}
                    <span>{"•"} </span>
                    <span>{timeToRead} min read</span>
                  </TimeHolder>
                  <ScrollPromptIcon
                    onClick={() => navigate(`${slug}#POST`)}
                    icon="arrow_drop_down_circle"
                  />
                </Meta>
                {
                  // @ts-ignore
                  <Img fluid={featuredImage.childImageSharp.fluid} />
                }
              </Hero>
            )}
            <MDXContainer id="POST">
              <MDXRenderer>{body}</MDXRenderer>
            </MDXContainer>
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
            fluid(maxWidth: 3300, quality: 90, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Post
