import React from "react"
import { format } from "timeago.js"
import { ArticlesQuery } from "../../types/graphql-types"
import safe from "../../utils/safe"
import { parseImage } from "../Images"
import { CardMeta, CardTitle, Container, Details, LinkWrapper } from "./style"

interface ICardProps {
  first: boolean
  data: ArticlesQuery["allMdx"]["edges"][0] // Article query type - nested inside `node`
}
const Card: React.FC<ICardProps> = ({ first, data }) => {
  const article = safe(data.node)
  const { title, date, largeThumbnail, thumbnail } = safe(article.frontmatter)
  const { slug } = safe(article.fields)

  return (
    <Container first={first}>
      <LinkWrapper to={slug!}>
        {largeThumbnail && thumbnail && first
          ? parseImage(largeThumbnail)()()
          : parseImage(thumbnail)()()}
        <Details>
          <CardTitle>{title}</CardTitle>
          <CardMeta>
            <span>{format(date!)}</span> <span>{" • "} </span>
            <span>{article.timeToRead} min read</span>
          </CardMeta>
        </Details>
      </LinkWrapper>
    </Container>
  )
}

export default Card
