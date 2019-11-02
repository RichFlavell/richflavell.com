module.exports = {
  siteMetadata: {
    title: `RichFlavell.com`,
    description: `RichFlavell.com`,
    author: `@richflavell`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-images`],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
              quality: 75,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RichFlavell.com`,
        short_name: `RichFlavell.com`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
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
  ],
}
