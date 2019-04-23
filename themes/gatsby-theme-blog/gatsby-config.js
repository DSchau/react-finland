const fs = require('fs')
const yup = require('yup')

const { sourceInstanceName } = require('./constants')

const pluginOptions = yup.object().shape({
  adapter: yup.string().oneOf(['mdx', 'markdown', 'md']).required(),
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

module.exports = async function gatsbyConfig(opts) {
  const { adapter: blogAdapter, contentDirectory } = await pluginOptions.validate(opts)

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
      }
    ]
      .concat(adapter())
  }
}
