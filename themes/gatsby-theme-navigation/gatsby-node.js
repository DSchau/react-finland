const createSiteNavigationNode = (node, navItem, actions) => {
  const id = actions.createContentDigest(navItem);
  actions.createNode({
    id,
    parent: node.id,
    internal: {
      type: `SiteNavigation`,
      contentDigest: id,
    },
    ...navItem,
  });
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteNavigation implements Node {
      label: String!
      path: String!
    }
  `);
};

exports.onCreateNode = function({
  actions: gatsbyActions,
  node,
  createContentDigest,
}) {
  const actions = Object.assign({}, gatsbyActions, {
    createContentDigest,
  });

  // TODO: implement with Yaml
  if (node.internal.type === `SiteYaml`) {
  } else if (
    node.internal.type === `Site` &&
    node.siteMetadata &&
    node.siteMetadata.navigation
  ) {
    const navigation = node.siteMetadata.navigation;
    navigation.forEach(navItem =>
      createSiteNavigationNode(node, navItem, actions)
    );
  }
};
