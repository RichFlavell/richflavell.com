import { graphql } from "gatsby"
import React from "react"
import Card from "../../components/Card"
import GridList from "../../components/GridList"
import { Content, Left, Right } from "../../config/style/mdx"
import { ArticlesQuery } from "../../generated/graphql-types"
import safe from "../../utils/safe"
import { SeeMoreLink } from "../Home/style"
import { Actions, PageCount, PageHeading, PageTitle } from "./style"

interface IArticlesProps {
  data: ArticlesQuery
  pageContext: {
    currentPage: number
    numPages: number
  }
}
const Articles: React.FC<IArticlesProps> = ({ data, pageContext }) => {
  const articles = safe(data.allMdx.edges)
  return (
    <>
      <Content>
        <PageHeading>
          <PageTitle>Articles</PageTitle>
          <PageCount>
            Page {pageContext.currentPage} / {pageContext.numPages}
          </PageCount>
        </PageHeading>
        <GridList>
          {articles.map(article => (
            <Card first={false} key={article.node.id} data={article} />
          ))}
        </GridList>
        <Actions>
          {pageContext.currentPage > 1 && (
            <Left>
              <SeeMoreLink
                to={
                  pageContext.currentPage - 1 === 1
                    ? `/articles`
                    : `/articles/${pageContext.currentPage - 1}`
                }
              >
                &laquo; Previous
              </SeeMoreLink>
            </Left>
          )}
          {pageContext.currentPage < pageContext.numPages && (
            <Right>
              <SeeMoreLink to={`/articles/${pageContext.currentPage + 1}`}>
                Next &raquo;
              </SeeMoreLink>
            </Right>
          )}
        </Actions>
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
