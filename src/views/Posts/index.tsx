import { graphql } from "gatsby"
import React from "react"
import Card from "../../components/Card"
import { Left, Right } from "../../config/style/mdx"
import { PostsQuery } from "../../types/graphql"
import safe from "../../utils/safe"
import SEO from "../../utils/SEO"
import { SeeMoreLink } from "../Home/style"
import {
  Actions,
  PageCount,
  PageHeading,
  PageTitle,
  PostsGridList,
  Wrapper,
} from "./style"
import { useTranslation } from "react-i18next"
import Header from "../../components/Header"

interface IPostsProps {
  data: PostsQuery
  pageContext: {
    currentPage: number
    numPages: number
  }
}
const Posts: React.FC<IPostsProps> = ({ data, pageContext }) => {
  const { t } = useTranslation("Posts")
  const posts = safe(data.allMdx.edges)
  return (
    <>
      <SEO title="Posts" pathname="/posts" />
      <Wrapper>
        <Header />
        <PageHeading>
          <PageTitle>{t("posts")}</PageTitle>
          <PageCount>
            {t("page")} {pageContext.currentPage} / {pageContext.numPages}
          </PageCount>
        </PageHeading>
        <PostsGridList>
          {posts.map(post => (
            <Card cascade={false} key={post.node.id} data={post} />
          ))}
        </PostsGridList>
        <Actions>
          {pageContext.currentPage > 1 && (
            <Left>
              <SeeMoreLink
                to={
                  pageContext.currentPage - 1 === 1
                    ? `/posts/`
                    : `/posts/${pageContext.currentPage - 1}/`
                }
              >
                &laquo; {t("previous")}
              </SeeMoreLink>
            </Left>
          )}
          {pageContext.currentPage < pageContext.numPages && (
            <Right>
              <SeeMoreLink to={`/posts/${pageContext.currentPage + 1}/`}>
                {t("next")} &raquo;
              </SeeMoreLink>
            </Right>
          )}
        </Actions>
      </Wrapper>
    </>
  )
}

export const pageQuery = graphql`
  query Posts($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { path: { eq: null } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            path
            thumbnail: featuredImage {
              publicURL
              childImageSharp {
                fluid(
                  maxWidth: 653
                  maxHeight: 280
                  cropFocus: CENTER
                  quality: 80
                ) {
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
