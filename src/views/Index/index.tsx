import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Content, Heading, Title } from "../../config/style/mdx"
import { HomeQuery } from "../../generated/graphql-types"
import safe from "../../utils/safe"

interface IHomeProps {
  data?: HomeQuery
}
const Home: React.FC<IHomeProps> = () => {
  const data: HomeQuery = useStaticQuery(graphql`
    query Home {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 12
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
  `)

  const articles = safe(data.allMdx.edges)

  console.log(articles)

  return (
    <>
      <Content>
        <Heading>
          <Title>Home</Title>
        </Heading>
      </Content>
    </>
  )
}

export default Home
