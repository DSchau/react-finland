const path = require('path')

module.exports = {
  siteMetadata: {
    title: `React Nebraska`
  },
  __experimentalThemes: [
    {
      resolve: `gatsby-theme-react-finland`,
      options: {}
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        adapter: `md`,
        contentDirectory: path.join(__dirname, `blog`)
      }
    }
  ]
}
