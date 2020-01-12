module.exports = {
  siteMetadata: {
    title: "Rich Flavell",
    titleTemplate: "Rich Flavell // %s",
    description:
      "Software Engineer, Outdoors Enthusiast & Aspirational Photographer",
    url: "https://www.richflavell.com",
    siteUrl: "https://www.richflavell.com",
    image: "/images/me.jpg",
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
        gatsbyRemarkPlugins: [
          `gatsby-remark-images`,
          `gatsby-remark-external-links`,
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
              quality: 75,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow",
            },
          },
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
