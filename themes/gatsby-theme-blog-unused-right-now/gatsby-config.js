const path = require('path')

module.exports = function gatsbyConfig({ root, contentDirectory = path.join(`content`, `blog` )}) {
  return {
    __experimentalThemes: [
      {
        resolve: `gatsby-theme-blog-core`
      }
    ],
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.join(root, contentDirectory),
          name: `blog`,
        }
      },
      {
        resolve: `gatsby-mdx`,
        options: {
          
        }
      }
    ]
  }
}
