import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Card from "../../components/Card"
import { Content } from "../../config/style/mdx"
import { HomeQuery } from "../../generated/graphql-types"
import safe from "../../utils/safe"
import { GridList } from "./style"

interface IHomeProps {
  data?: HomeQuery
}
const Home: React.FC<IHomeProps> = () => {
  const data: HomeQuery = useStaticQuery(graphql`
    query Home {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 10
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
  `)

  const articles = safe(data.allMdx.edges)

  return (
    <>
      <Content>
        <GridList>
          {articles.map((article, i) => (
            <Card first={i === 0} key={article.node.id} data={article} />
          ))}
        </GridList>
      </Content>
    </>
  )
}

export default Home
