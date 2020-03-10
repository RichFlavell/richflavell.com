import React from "react"
import { format } from "timeago.js"
import { PostsQuery } from "../../types/graphql-types"
import safe from "../../utils/safe"
import {
  CardMeta,
  CardTitle,
  Container,
  Details,
  LinkWrapper,
  CardExcerpt,
  CardImage,
} from "./style"
import Img from "gatsby-image"

interface ICardProps {
  first: boolean
  only?: boolean // Is this the only card in the list
  cascade?: boolean
  data: PostsQuery["allMdx"]["edges"][0] // Post query type - nested inside `node`
}
const Card: React.FC<ICardProps> = ({ first, only, cascade, data }) => {
  const post = safe(data.node)
  const { title, date, thumbnail } = safe(post.frontmatter)
  const { slug } = safe(post.fields)

  return (
    <Container cascade={cascade} first={first} only={only}>
      <LinkWrapper cascade={cascade} to={slug!}>
        <CardImage cascade={cascade} className="i-m">
          {
            // @ts-ignore
            <Img fluid={thumbnail.childImageSharp.fluid} />
          }
        </CardImage>
        <Details>
          <CardTitle first={first} only={only}>
            {title}
          </CardTitle>
          <CardExcerpt>{post.excerpt}</CardExcerpt>
          <CardMeta>
            <time dateTime={date || undefined}>{format(date!)}</time>{" "}
            <span>{"•"} </span>
            <span>{post.timeToRead} min read</span>
          </CardMeta>
        </Details>
      </LinkWrapper>
    </Container>
  )
}

export default Card
