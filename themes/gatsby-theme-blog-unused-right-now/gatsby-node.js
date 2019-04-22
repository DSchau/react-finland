exports.createResolvers = function ({ createResolvers }) {
  createResolvers({
    BlogPost: {
      sup: {
        type: `Boolean`,
        resolve() {
          return false
        }
      },
      body: {
        type: `String!`,
        resolve(source, args, context, info) {
          console.log(source, args, context)
          return {}
        }
      }
    }
  })
}