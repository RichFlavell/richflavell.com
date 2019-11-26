import React, { useState } from "react"
import { globalHistory } from "@reach/router"
import { DiscussionEmbed } from "disqus-react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { format } from "timeago.js"
import { PostQuery } from "../../types/graphql-types"
import safe from "../../utils/safe"
import { parseImage } from "../../components/Images"
import { Title } from "../../config/style/mdx"
import { Container, FeaturedImageContainer, Header, Meta } from "./style"
import SEO from "../../utils/SEO"
import Lightbox from "../../components/Lightbox"

interface IPostProps {
  data: PostQuery
}
const Post: React.FC<IPostProps> = ({ data }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | undefined>(
    undefined
  )
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
      parsedImages[`image${i + 1}`] = parseImage(image)(
        !customHeading
          ? () => setActiveImageIndex(featuredImage ? i + 1 : i)
          : undefined
      )
    })
  }

  function buildImagesForLightbox() {
    const imgUrls =
      images &&
      images.map(image => {
        const { publicURL } = safe(image)

        return {
          src: publicURL!,
        }
      })

    if (featuredImage && imgUrls) {
      imgUrls.unshift({
        src: safe(featuredImage).publicURL!,
      })
    }

    return imgUrls
  }

  function renderHeader() {
    return (
      <Header>
        <Title>{title}</Title>
        <Meta>
          <time dateTime={date || undefined}>{format(date!)}</time>{" "}
          <span>{" • "} </span>
          <span>{timeToRead} min read</span>
        </Meta>
      </Header>
    )
  }

  return (
    <>
      <SEO
        title={title}
        post={true}
        description={excerpt}
        image={safe(featuredImage).publicURL!}
      />
      {images && (
        <Lightbox
          isOpen={activeImageIndex !== undefined}
          currentIndex={activeImageIndex}
          onClose={() => setActiveImageIndex(undefined)}
          images={buildImagesForLightbox()!}
        />
      )}

      <main>
        {featuredImage && (
          <FeaturedImageContainer>
            {parseImage(featuredImage)(() => setActiveImageIndex(0))()}
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
  query Post($id: String) {
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
            fluid(
              maxWidth: 2160
              maxHeight: 620
              quality: 90
              cropFocus: CENTER
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Post
