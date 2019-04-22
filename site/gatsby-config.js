module.exports = {
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
