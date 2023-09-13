import React, { useLayoutEffect } from "react"
import { globalHistory, navigate } from "@reach/router"
import { DiscussionEmbed } from "disqus-react"
import ReactPlayer from "react-player"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { components } from "../../config/style/mdx"
import { format } from "timeago.js"
import { Title } from "../../config/style/mdx"
import {
  Container,
  DisqusWrapper,
  Hero,
  HomeLink,
  MDXBody,
  MDXContainer,
  Meta,
  MetaContainer,
  ScrollPromptIcon,
  Subtitle,
  TimeHolder,
} from "./style"
import SEO from "../../utils/SEO"
import { GatsbyImage } from "gatsby-plugin-image"
import ScrollProgress from "../../components/ScrollProgress"
import Embed from "../../components/Embed"
import { useTranslation } from "react-i18next"
import Header from "../../components/Header"

// @ts-expect-error: Types omit due to Acorn compiler limitation in the MDX parser
const Post = ({ data: { mdx }, children }) => {
  const { t } = useTranslation("Sidebar")
  const { frontmatter, excerpt, id, fields } = mdx
  const {
    customHeading,
    title,
    featuredImage,
    date,
    description,
  } = frontmatter

  const { slug, timeToRead } = fields

  const disqusConfig = {
    shortname: "richflavell",
    config: { identifier: id, title, url: globalHistory.location.href },
  }

  useLayoutEffect(() => {
    const wrappers = document.querySelectorAll(".gatsby-resp-image-wrapper")

    wrappers.forEach(wrapper => {
      const img = wrapper.querySelector("img")
      const placeholder = wrapper.querySelector("span")

      placeholder && img?.addEventListener("load", () => (placeholder.style.opacity = "0"))
    })
  }, [])

  return (
    <>
      <SEO
        title={title}
        article={true}
        description={description || excerpt}
        image={featuredImage?.publicURL}
        pathname={`${slug}/`}
      />

      <Header actionsOnly={!customHeading} alignCenter={true} />

      <ScrollProgress />

      <main>
        <Container>
          <MDXBody>
            {featuredImage && !customHeading && (
              <Hero className="i-m i-f">
                <Meta>
                  <HomeLink to="/">{t("home")}</HomeLink>
                  <MetaContainer>
                    <Title>{title}</Title>
                    <Subtitle>{description || excerpt}</Subtitle>
                  </MetaContainer>
                  <TimeHolder>
                    <time dateTime={date || undefined}>{format(date)}</time>{" "}
                    <span>{"•"} </span>
                    <span>{timeToRead.text}</span>
                  </TimeHolder>
                  <ScrollPromptIcon
                    onClick={() => navigate(`${slug}#POST`)}
                    icon="arrow_drop_down_circle"
                  />
                </Meta>
                <GatsbyImage alt={`Featured image for ${title}`} image={featuredImage.childImageSharp.gatsbyImageData} />
              </Hero>
            )}
            <MDXContainer id="POST">
              <MDXProvider components={{ ...components, Embed, ReactPlayer }}>{children}</MDXProvider>
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
      excerpt
      fields {
        slug
        timeToRead {
          minutes
          text
          time
          words
        }
      }
      frontmatter {
        title
        customHeading
        date
        description
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED, 
              width: 3300, 
              quality: 80,
              placeholder: DOMINANT_COLOR,
              transformOptions: {
                fit: COVER,
                cropFocus: CENTER
              },
            )
          }
        }
      }
    }
  }
`

export default Post
