import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Card from "../../components/Card"
import GridList from "../../components/GridList"
import { Content, Right } from "../../config/style/mdx"
import SEO from "../../utils/SEO"
import { Actions, Holder, SeeMoreLink, Video, VideoWrapper } from "./style"
import { useTranslation } from "react-i18next"
import Header from "../../components/Header"

const query = graphql`
  query Home {
    allMdx(
      sort: {
        frontmatter: {
          date: DESC
        }
      }
      limit: 6
      filter: {
        frontmatter: {
          path: {
            eq: null
          }
        }
      }
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
            date
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
          }
        }
      }
    }
  }
`
const Home = () => {
  const data = useStaticQuery<Queries.HomeQuery>(query)
  const { t } = useTranslation("Home")
  const videoId = ""
  const [rows, setRows] = useState<Array<typeof data.allMdx.edges>>()

  const postsData = data.allMdx.edges

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
      <SEO title="Rich Flavell" templateOverride="%s" />
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
