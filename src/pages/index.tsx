import { graphql } from "gatsby"
import React from "react"
import { IndexQuery } from "../generated/graphql-types"
import safe from "../utils/safe"

interface IIndexProps {
  data: IndexQuery
}
const Index: React.FC<IIndexProps> = ({ data }) => {
  const articles = safe(data.allMdx.edges)
  console.log(articles)
  return <></>
}

export const pageQuery = graphql`
  query Index {
    allMdx(filter: { frontmatter: { path: { eq: null } } }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
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

export default Index
