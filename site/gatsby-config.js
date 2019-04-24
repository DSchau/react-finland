const path = require('path')

module.exports = {
  siteMetadata: {
    title: `React Nebraska`,
    navigation: [
      {
        label: `Home`,
        path: `/`
      },
      {
        label: `Schedule`,
        path: `/schedule`
      },
      {
        label: `Speakers`,
        path: `/speakers`
      },
      {
        label: `Blog`,
        path: `/blog`
      }
    ]
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
    },
    {
      resolve: `gatsby-theme-navigation`
    }
  ]
}
