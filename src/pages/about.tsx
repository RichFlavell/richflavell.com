import React from "react"
import Article from "../components/Article"

import AboutArticle from "../articles/about.mdx"

const About: React.FC = ({}) => {
  return (
    <Article>
      <AboutArticle />
    </Article>
  )
}

export default About
