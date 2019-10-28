const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: `/article${value}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // CREATE ARTICLE PAGES
  const articlePages = graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((results, errors) => {
    if (errors) return Promise.reject(errors)
    const articles = results.data.allMdx.edges
    articles.forEach(article => {
      createPage({
        path: article.node.frontmatter.path || article.node.fields.slug,
        component: path.resolve("./src/views/Article/index.tsx"),
        context: { id: article.node.id },
      })
    })
  })

  // CREATE ARTICLE LISTING PAGES
  const articleListings = graphql(`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { path: { eq: null } } }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then((results, errors) => {
    if (errors) return Promise.reject(errors)
    const articles = results.data.allMdx.edges
    const articlesPerPage = 12
    const numPages = Math.ceil(articles.length / articlesPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/articles` : `/articles/${i + 1}`,
        component: path.resolve("./src/views/Articles/index.tsx"),
        context: {
          limit: articlesPerPage,
          skip: i * articlesPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  return Promise.all([articlePages, articleListings])
}
