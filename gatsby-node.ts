import { createFilePath } from "gatsby-source-filesystem"
import readingTime from "reading-time"
import path from "path"

const postComponent = path.resolve(`./src/views/Post/index.tsx`)

const slugify = string => {
  const slug = string
    .toLowerCase()
    .normalize("NFD")
    .replace("&", "and")
    .replace(/[\u0300-\u036F]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")

  return `${slug}`.replace(/\/\/+/g, "/")
}

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "slug",
      value: `/${slugify(createFilePath({ node, getNode }))}`,
    })
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body)
    })
  }
}

export const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // CREATE ARTICLE PAGES
  const postPages = graphql(`
    query PostPages {
      allMdx {
        nodes {
          id
          internal {
            contentFilePath
          }
          frontmatter {
            path
          }
          fields {
            slug
          }
        }
      }
    }
  `).then((results, errors) => {
    if (errors) return Promise.reject(errors)
    const posts = results.data.allMdx.nodes
    posts.forEach(post => {
      createPage({
        path: `${post.frontmatter.path || post.fields.slug}/`,
        component: `${postComponent}?__contentFilePath=${post.internal.contentFilePath}`,
        context: { id: post.id },
      })
    })
  })

  // CREATE ARTICLE LISTING PAGES
  const postListings = graphql(`
    query PostListings {
      allMdx(
        sort: {frontmatter: {date: ASC}}
        filter: {frontmatter: {path: {eq: null}}}
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
        path: i === 0 ? `/posts/` : `/posts/${i + 1}/`,
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
