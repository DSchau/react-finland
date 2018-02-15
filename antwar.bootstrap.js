// Needed for JSX compilation to work
require("@babel/register");

const antwar = require("antwar");
const environment = process.argv[2];

antwar[environment]({
  environment,
  antwar: require("./antwar.config"),
  webpack: require("./webpack.config"),
})
  .then(() => {
    if (environment !== "build") {
      console.log("Surf to http://localhost:3000");
    }
  })
  .catch(err => {
    console.error(err);

    process.exit(1);
  });
