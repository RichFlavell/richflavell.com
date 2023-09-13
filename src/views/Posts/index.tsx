import { graphql } from "gatsby"
import React from "react"
import Card from "../../components/Card"
import { Left, Right } from "../../config/style/mdx"
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

type IPostsProps = {
  data: Queries.PostPagesQuery
  pageContext: {
    currentPage: number
    numPages: number
  }
}
const Posts: React.FC<IPostsProps> = ({ data, pageContext }) => {
  const { t } = useTranslation("Posts")
  const posts = data.allMdx.edges
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
            <Card cascade={false} key={post.id} data={post} />
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
      sort: {frontmatter: {date: DESC}}
      limit: $limit
      skip: $skip
      filter: {frontmatter: {path: {eq: null}}}
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          fields {
            slug
            timeToRead {
              minutes
              text
              time
              words
            }
          }
          frontmatter {
            title
            path
            thumbnail: featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED, 
                  width: 653, 
                  height: 280,
                  quality: 80,
                  placeholder: DOMINANT_COLOR,
                  transformOptions: {
                    fit: COVER,
                    cropFocus: CENTER
                  },
                )
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
