const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: `/post${value}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // CREATE ARTICLE PAGES
  const postPages = graphql(`
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
    const posts = results.data.allMdx.edges
    posts.forEach(post => {
      createPage({
        path: post.node.frontmatter.path || post.node.fields.slug,
        component: path.resolve("./src/views/Post/index.tsx"),
        context: { id: post.node.id },
      })
    })
  })

  // CREATE ARTICLE LISTING PAGES
  const postListings = graphql(`
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
    const posts = results.data.allMdx.edges
    const postsPerPage = 12
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/posts` : `/posts/${i + 1}`,
        component: path.resolve("./src/views/Posts/index.tsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  return Promise.all([postPages, postListings])
}
