import React from "react"
import { format } from "timeago.js"
import {
  CardExcerpt,
  CardImage,
  CardMeta,
  CardTitle,
  Container,
  Details,
  LinkWrapper,
} from "./style"
import { GatsbyImage } from "gatsby-plugin-image"

type ICardProps = {
  cascade?: boolean
  data: PostsQuery["allMdx"]["edges"][0] // Post query type - nested inside `node`
}
const Card: React.FC<ICardProps> = ({ cascade, data }) => {
  const post = data.node!
  const { title, date, thumbnail } = post.frontmatter
  const { slug, timeToRead } = post.fields

  return (
    <Container cascade={cascade}>
      <LinkWrapper cascade={cascade ? 1 : 0} to={`${slug!}/`}>
        <CardImage cascade={cascade} className="i-m">
          <GatsbyImage alt={`Thumbnail for ${title}`} image={thumbnail.childImageSharp.gatsbyImageData} />
        </CardImage>
        <Details>
          <CardTitle>{title}</CardTitle>
          <CardExcerpt>{post.excerpt}</CardExcerpt>
          <CardMeta>
            <time dateTime={date || undefined}>{format(date!)}</time>{" "}
            <span>{"•"} </span>
            <span>{timeToRead.text}</span>
          </CardMeta>
        </Details>
      </LinkWrapper>
    </Container>
  )
}

export default Card
