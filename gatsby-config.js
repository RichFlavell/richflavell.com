module.exports = {
  siteMetadata: {
    title: "Rich Flavell",
    titleTemplate: "%s",
    description:
      "Rich Flavell is a software engineer by trade, a keen outdoors enthusiast and aspirational photographer.",
    url: "https://www.richflavell.com",
    siteUrl: "https://www.richflavell.com",
    image: "/me.jpg",
    twitterUsername: "@RichFlavell",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 10000,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noreferrer",
            },
          },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-numbered-footnotes` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rich Flavell`,
        short_name: `Rich Flavell`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#9487B7`,
        display: `standalone`,
        icon: `src/images/me.jpg`,
      },
    },
    {
      resolve: "gatsby-plugin-generate-typings",
      options: {
        dest: "./src/types/graphql-types.d.ts",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151379991-1",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
