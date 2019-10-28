import { graphql } from "gatsby"
import React from "react"
import { Content, Heading, Title } from "../../config/style/mdx"
import { ArticlesQuery } from "../../generated/graphql-types"
import safe from "../../utils/safe"

interface IArticlesProps {
  data: ArticlesQuery
}
const Articles: React.FC<IArticlesProps> = ({ data }) => {
  const articles = safe(data.allMdx.edges)
  console.log(articles)
  return (
    <>
      <Content>
        <Heading>
          <Title>Articles</Title>
        </Heading>
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
          fields {
            slug
          }
          frontmatter {
            title
            path
            featuredImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 2160, maxHeight: 620, quality: 90) {
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
