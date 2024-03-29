export default {
  graphqlTypegen: {
    typesOutputPath: `./src/types/gatsby-types.d.ts`,
  },
  siteMetadata: {
    title: "Rich Flavell",
    titleTemplate: "%s",
    description:
      "Rich Flavell is a software engineer by trade, cyclist and outdoors enthusiast.",
    url: "https://www.richflavell.com",
    siteUrl: "https://www.richflavell.com",
    image: "/me.jpg",
    twitterUsername: "@RichFlavell",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://richflavell.us5.list-manage.com/subscribe/post?u=735eb1bda7a0c28ed5d35cdc4&amp;id=0b6c57dfe2",
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Material Icons Outlined`,
          `Merriweather:300,300i,400,400i,700,700i`,
          "Lato:300;300i,400,400i,700,700i",
        ],
      },
    },
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2160,
              linkImagesToOriginal: false,
              quality: 80,
              backgroundColor: "transparent"
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {},
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noreferrer",
            },
          },
          { resolve: `gatsby-remark-smartypants` },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
