const React = require("react")

exports.onRenderBody = function onRenderBody({
  setHeadComponents,
  setPostBodyComponents,
}) {
  setHeadComponents([
    React.createElement(`link`, {
      key: `gatsby-plugin-tito-css`,
      rel: `stylesheet`,
      type: `text.css`,
      href: `https://css.tito.io/v1.1`,
    }),
  ])

  setPostBodyComponents([
    React.createElement(`script`, {
      key: `gatsby-plugin-tito-js`,
      src: `https://js.tito.io/v1`,
      async: true,
    }),
  ])
}
