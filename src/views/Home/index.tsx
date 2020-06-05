import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Card from "../../components/Card"
import GridList from "../../components/GridList"
import { Content, Right } from "../../config/style/mdx"
import { HomeQuery } from "../../types/graphql"
import safe from "../../utils/safe"
import SEO from "../../utils/SEO"
import { Holder, Actions, SeeMoreLink, Video, VideoWrapper } from "./style"
import { useTranslation } from "react-i18next"
import Header from "../../components/Header"

interface IHomeProps {
  data?: HomeQuery
}
const Home: React.FC<IHomeProps> = () => {
  const { t } = useTranslation("Home")
  const videoId = ""
  const [rows, setRows] = useState<Array<typeof data.allMdx.edges>>()

  const data: HomeQuery = useStaticQuery(graphql`
    query Home {
      allMdx(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 6
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
              date
              thumbnail: featuredImage {
                publicURL
                childImageSharp {
                  fluid(
                    maxWidth: 653
                    maxHeight: 280
                    cropFocus: CENTER
                    quality: 90
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const postsData = safe(data.allMdx.edges)

  useEffect(() => {
    const tmp = []
    const posts = [...postsData]
    while (posts.length > 0) {
      tmp.push(posts.splice(0, 2))
    }
    setRows(tmp)
  }, [postsData])

  return (
    <Holder>
      <SEO title="Rich Flavell" templateOverride={"%s"} />
      <Header />
      {videoId && (
        <VideoWrapper>
          <Video
            url={`https://www.youtube.com/watch?v=${videoId}`}
            playing={true}
            controls={true}
            light={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            width="100%"
            height="100%"
          />
        </VideoWrapper>
      )}

      <Content>
        {rows &&
          rows.map((row, i) => (
            <GridList key={i} even={i % 2 === 0} cascade={true}>
              {row.map(post => (
                <Card cascade={true} key={post.node.id} data={post} />
              ))}
            </GridList>
          ))}
        {data.allMdx.totalCount > 6 && (
          <Actions>
            <Right>
              <SeeMoreLink to="/posts/">{t("seeMore")} &raquo;</SeeMoreLink>
            </Right>
          </Actions>
        )}
      </Content>
    </Holder>
  )
}

export default Home
