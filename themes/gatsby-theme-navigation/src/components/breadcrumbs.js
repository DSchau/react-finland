import React from 'react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'

const Link = ({ to, children, ...rest }) => {
  if (to.match(/^https?/)) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <GatsbyLink to={to} {...rest}>
      {children}
    </GatsbyLink>
  )
}

// TODO: fix
function Breadcrumbs({ className }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }

      navigation: allSiteNavigation {
        nodes {
          label
          path
        }
      }
    }
  `)
  return (
    <ul
      className={className}
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      {data.navigation.nodes.map(node => (
        <li key={node.path} style={{ display: `inline-block` }}>
          <Link
            to={node.path}
            style={{ color: `white`, margin: `1rem`, padding: `0.5rem 1rem` }}
          >
            {node.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Breadcrumbs
