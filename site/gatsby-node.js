const path = require('path')
const slugify = require('limax')

exports.createPages = async function createPages({ actions, graphql }) {
  // const { data, errors } = await graphql(`
  //   {
  //     reactFinland {
  //       conference(id: "react-finland-2019") {
  //         speakers {
  //           name
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (errors) {
  //   throw errors
  // }

  // const { speakers } = data.reactFinland.conference

  // const speakersTemplate = path.resolve('./src/templates/speaker.js')

  // speakers.forEach(speaker => {
  //   actions.createPage({
  //     component: speakersTemplate,
  //     path: `/speakers/${slugify(speaker.name)}`,
  //     context: {
  //       name: speaker.name
  //     }
  //   })
  // })
}
