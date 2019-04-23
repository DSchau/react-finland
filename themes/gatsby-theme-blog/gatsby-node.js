const { createFilePath } = require('gatsby-source-filesystem')

const createBlogPostNode = (node, api) => {
  const slug = createFilePath({
    node: node,
    getNode: api.getNode,
    basePath: `blog`
  })
  const blogPost = Object.assign({}, node.frontmatter, {
    slug: `/blog${slug}`
  })
  const id = api.createContentDigest(blogPost)
  api.actions.createNode({
    id,
    parent: node.id,
    internal: {
      type: `BlogPost`,
      contentDigest: id
    },
    ...blogPost
  })
}

const adapters = {
  md(node, actions) {
    if (node.internal.type === `MarkdownRemark`) {
      return createBlogPostNode(node, actions)
    }
  },
  markdown(...rest) {
    return this.md(...rest)
  },
  mdx(node, actions) {
    if (node.internal.type === `Mdx`) {
      return createBlogPostNode(node, actions)
    }
  }
}

const typeLookup = {
  mdx: `Mdx`,
  markdown: `MarkdownRemark`,
  md: `MarkdownRemark`
}

exports.sourceNodes = ({ actions }, { adapter }) => {
  const { createTypes } = actions

  const type = typeLookup[adapter]

  createTypes(`
    type BlogPost implements Node {
      author: String
      title: String
      date: Date
      slug: String

      body: ${type}!
    }
  `)
}

exports.onCreateNode = function (api, { adapter: blogPostAdapter }) {
  const adapter = adapters[blogPostAdapter]

  return adapter(api.node, api)
}

exports.createResolvers = function({ createResolvers }, { adapter }) {
  const type = typeLookup[adapter]
  createResolvers({
    BlogPost: {
      type: `${type}!`,
      body: {
        resolve(source, args, context) {
          return context.nodeModel.getNodeById({
            id: source.parent,
            type,
          })
        }
      }
    }
  })
}

exports.createPages = async function createPages({ actions, graphql }) {
  const { data, errors } = await graphql(`
    {
      allBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  const blogPostTemplate = require.resolve(`./templates/blog-post.js`)

  data.allBlogPost.nodes.map(node => {
    actions.createPage({
      component: blogPostTemplate,
      path: node.slug,
      context: {
        slug: node.slug
      }
    })
  })
}
