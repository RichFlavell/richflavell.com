import React from "react"
import { format } from "timeago.js"
import { PostsQuery } from "../../types/graphql-types"
import safe from "../../utils/safe"
import { parseImage } from "../Images"
import { CardMeta, CardTitle, Container, Details, LinkWrapper } from "./style"

interface ICardProps {
  first: boolean
  data: PostsQuery["allMdx"]["edges"][0] // Post query type - nested inside `node`
}
const Card: React.FC<ICardProps> = ({ first, data }) => {
  const post = safe(data.node)
  const { title, date, largeThumbnail, thumbnail } = safe(post.frontmatter)
  const { slug } = safe(post.fields)

  return (
    <Container first={first}>
      <LinkWrapper to={slug!}>
        {largeThumbnail && thumbnail && first
          ? parseImage(largeThumbnail)()()
          : parseImage(thumbnail)()()}
        <Details>
          <CardTitle>{title}</CardTitle>
          <CardMeta>
            <time dateTime={date || undefined}>{format(date!)}</time>{" "}
            <span>{" • "} </span>
            <span>{post.timeToRead} min read</span>
          </CardMeta>
        </Details>
      </LinkWrapper>
    </Container>
  )
}

export default Card
