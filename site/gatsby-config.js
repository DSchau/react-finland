require('dotenv').config()
const path = require('path')

const contentDirectory = path.join(process.cwd(), 'blog')

module.exports = {
  siteMetadata: {
    siteUrl: `https://react-finland-gatsby.netlify.com`,
    navigation: [
      {
        label: `Schedule`,
        path: `/schedule`
      },
      {
        label: `Speakers`,
        path: `/speakers`
      }
    ]
  },
  __experimentalThemes: [
    {
      resolve: `@dschau/gatsby-theme-navigation`,
      options: {}
    },
    {
      resolve: `@dschau/gatsby-theme-blog`,
      options: {
        adapter: `md`,
        root: process.cwd(),
        contentDirectory
      }
    },
    {
      resolve: `@dschau/gatsby-theme-search`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        queries: [
          {
            query: `{
              reactFinland {
                conference(id: "react-finland-2019") {
                  speakers {
                    name
                  }
                }
              }
            }`
          }
        ]
      }
    }
  ],
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentDirectory,
        name: `blogContent`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`
        ]
      }
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-tito`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `conferences`,
        fieldName: `reactFinland`,
        url: `https://api.react-finland.fi/graphql`
      }
    }
  ]
}
