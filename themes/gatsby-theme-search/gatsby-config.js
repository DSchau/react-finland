const yup = require('yup');

const pluginOptions = yup.object().shape({
  appId: yup.string().required(),
  apiKey: yup.string().required(),
  chunkSize: yup.number(),
  indexName: yup.string(),
  query: yup.string(),
  queries: yup
    .array()
    .of(yup.string())
    .min(1)
    .required(),
});

module.exports = async function gatsbyConfig(opts) {
  opts.queries = opts.queries || [].concat(opts.query);
  const options = await pluginOptions.validate(opts);
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-algolia`,
        options,
      },
      {
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: ['@dschau/gatsby-theme-search'],
        },
      },
    ],
  };
};
