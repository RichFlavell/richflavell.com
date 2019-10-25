const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: `/articles${value}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
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
        component: path.resolve("./src/components/Article/index.tsx"),
        context: { id: article.node.id },
      })
    })
  })
}
