module.exports = {
  __experimentalThemes: [
    {
      resolve: `@dschau/gatsby-theme-search`,
      options: {
        appId: `1234`,
        apiKey: `1234`,
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
