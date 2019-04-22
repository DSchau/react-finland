require('dotenv').config()

module.exports = {
  __experimentalThemes: [
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
            }`,
            transformer: ({ data }) => console.log(data) || []
          }
        ]
      }
    }
  ],
  plugins: [
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
