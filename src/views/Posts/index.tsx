import { graphql } from "gatsby"
import React from "react"
import Card from "../../components/Card"
import GridList from "../../components/GridList"
import { Content, Left, Right } from "../../config/style/mdx"
import { PostsQuery } from "../../types/graphql-types"
import safe from "../../utils/safe"
import SEO from "../../utils/SEO"
import { SeeMoreLink } from "../Home/style"
import { Actions, PageCount, PageHeading, PageTitle } from "./style"

interface IPostsProps {
  data: PostsQuery
  pageContext: {
    currentPage: number
    numPages: number
  }
}
const Posts: React.FC<IPostsProps> = ({ data, pageContext }) => {
  const posts = safe(data.allMdx.edges)
  return (
    <>
      <SEO title={"Posts"} />
      <Content>
        <PageHeading>
          <PageTitle>Posts</PageTitle>
          <PageCount>
            Page {pageContext.currentPage} / {pageContext.numPages}
          </PageCount>
        </PageHeading>
        <GridList>
          {posts.map(post => (
            <Card first={false} key={post.node.id} data={post} />
          ))}
        </GridList>
        <Actions>
          {pageContext.currentPage > 1 && (
            <Left>
              <SeeMoreLink
                to={
                  pageContext.currentPage - 1 === 1
                    ? `/posts`
                    : `/posts/${pageContext.currentPage - 1}`
                }
              >
                &laquo; Previous
              </SeeMoreLink>
            </Left>
          )}
          {pageContext.currentPage < pageContext.numPages && (
            <Right>
              <SeeMoreLink to={`/posts/${pageContext.currentPage + 1}`}>
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
  query Posts($skip: Int!, $limit: Int!) {
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
                fluid(maxWidth: 980, quality: 90, cropFocus: ENTROPY) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            thumbnail: featuredImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 500, quality: 90, cropFocus: ENTROPY) {
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

export default Posts
