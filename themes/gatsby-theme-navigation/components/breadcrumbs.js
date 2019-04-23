import React from 'react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'

const Link = ({ to, children, ...rest }) => {
  if (to.match(/^https?/)) {
    return <a href={to} {...rest}>{children}</a>
  }
  return <GatsbyLink to={to} {...rest}>{children}</GatsbyLink>
}

// TODO: fix
function Breadcrumbs({
  className,
}) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  return (
    <ul className={className}>
      {
        data.navigation.nodes.map(node => (
          <li key={node.path}>
            <Link to={node.path}>{node.label}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Breadcrumbs
