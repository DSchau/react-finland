const path = require('path')
const yup = require('yup')

const { sourceInstanceName } = require('./constants')

const pluginOptions = yup.object().shape({
  adapter: yup.string().oneOf(['mdx', 'markdown', 'md']).default(() => `md`).required(),
  root: yup.string(),
  contentDirectory: yup.string().required()
})

const adapters = {
  md() {
    return [
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-prismjs`,
            `gatsby-remark-smartypants`,
            `gatsby-remark-autolink-headers`
          ]
        }
      }
    ]
  },
  markdown() {
    return this.md()
  },
  mdx() {
    return [
      {
        resolve: `gatsby-mdx`,
        options: {}
      }
    ]
  }
}

module.exports = function gatsbyConfig(opts) {
  const { adapter: blogAdapter, contentDirectory } = pluginOptions.validateSync(opts)

  const adapter = adapters[blogAdapter]

  return {
    siteMetadata: {},
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentDirectory,
          name: sourceInstanceName
        }
      },
      {
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [
            '@dschau/gatsby-theme-blog'
          ]
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, 'src', 'pages'),
        },
      },
    ]
      .concat(adapter())
  }
}
