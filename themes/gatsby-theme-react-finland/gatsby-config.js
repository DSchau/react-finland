const path = require('path')

module.exports = function gatsbyConfig() {
  return {
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
    plugins: [
      {
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [
            '@dschau/gatsby-theme-react-finland'
          ]
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, 'src', 'pages'),
        },
      },
      {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve('./src/layouts/index.js')
        }
      },
      `gatsby-plugin-emotion`,
      // `gatsby-plugin-tito`,
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
}
