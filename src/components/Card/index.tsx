import React from "react"
import { format } from "timeago.js"
import { PostsQuery } from "../../types/graphql"
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
  cascade?: boolean
  data: PostsQuery["allMdx"]["edges"][0] // Post query type - nested inside `node`
}
const Card: React.FC<ICardProps> = ({ cascade, data }) => {
  const post = data.node!
  const { title, date, thumbnail } = post.frontmatter!
  const { slug } = post.fields!

  return (
    <Container cascade={cascade}>
      <LinkWrapper cascade={cascade ? 1 : 0} to={`${slug!}/`}>
        <CardImage cascade={cascade} className="i-m">
          {
            // @ts-ignore
            <Img fluid={thumbnail.childImageSharp.fluid} />
          }
        </CardImage>
        <Details>
          <CardTitle>{title}</CardTitle>
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
