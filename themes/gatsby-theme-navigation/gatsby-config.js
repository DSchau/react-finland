const fs = require('fs')
const yup = require('yup')

const pluginOptions = yup.object().shape({
  contentDirectory: yup.string()
})

module.exports = async function gatsbyConfig(opts) {
  const { contentDirectory } = await pluginOptions.validate(opts)

  let plugins = []

  if (root && contentDirectory) {
    const exists = fs.existsSync(contentDirectory)
    if (!exists) {
      throw new Error(`You are using the contentDirectory option, which requires the path: ${contentDirectory} to exist`)
    }

    plugins = plugins.concat([
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentDirectory,
          name: `navigation`
        }
      },
      `gatsby-transformer-yaml`
    ])
  }

  return {
    plugins: [
      {
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [
            '@dschau/gatsby-theme-navigation'
          ]
        }
      }
    ]
      .concat(plugins)
  }
}
