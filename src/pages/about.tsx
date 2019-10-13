import React from "react"
import Article from "../components/Article"

import { graphql } from "gatsby"
import AboutArticle from "../articles/about.mdx"

interface IAboutProps {
  data: any
}
const About: React.FC<IAboutProps> = ({ data }) => {
  return (
    <Article>
      <AboutArticle avatar={data.file.childImageSharp.fixed} />
    </Article>
  )
}

export const query = graphql`
  query AboutPageQuery {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 320, height: 320) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`

export default About
