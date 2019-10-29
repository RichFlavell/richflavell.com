import { graphql } from "gatsby"
import React from "react"
import Card from "../../components/Card"
import GridList from "../../components/GridList"
import { Content, Heading, Right, Title } from "../../config/style/mdx"
import { ArticlesQuery } from "../../generated/graphql-types"
import safe from "../../utils/safe"
import { SeeMoreLink } from "../Index/style"

interface IArticlesProps {
  data: ArticlesQuery
}
const Articles: React.FC<IArticlesProps> = ({ data }) => {
  const articles = safe(data.allMdx.edges)
  return (
    <>
      <Content>
        <Heading>
          <Title>Articles</Title>
        </Heading>
        <GridList>
          {articles.map(article => (
            <Card first={false} key={article.node.id} data={article} />
          ))}
        </GridList>
        {data.allMdx.totalCount > 10 && (
          <Right>
            <SeeMoreLink to="/articles">See more &raquo;</SeeMoreLink>
          </Right>
        )}
      </Content>
    </>
  )
}

export const pageQuery = graphql`
  query Articles($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { path: { eq: null } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            path
            largeThumbnail: featuredImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 980, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            thumbnail: featuredImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 316, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
          }
        }
      }
    }
  }
`

export default Articles
