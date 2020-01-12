import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { SeoQuery } from "../types/graphql-types"
import safe from "./safe"

interface ISEOProps {
  title?: string
  description?: string
  image?: string
  pathname?: string
  post?: boolean
  lang?: string
}

const SEO: React.FC<ISEOProps> = ({
  title = null,
  description = null,
  image = null,
  pathname = null,
  post = false,
}) => {
  const data: SeoQuery = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername
        }
      }
    }
  `)

  const { siteMetadata } = safe(data.site)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = safe(siteMetadata)

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || "/"}`,
  }

  return (
    <>
      <Helmet title={seo.title!} titleTemplate={titleTemplate!}>
        <meta name="description" content={seo.description!} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(post ? true : null) && <meta property="og:type" content="post" />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:300,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </Helmet>
    </>
  )
}
export default SEO
