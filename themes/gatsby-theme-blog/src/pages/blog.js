import React from 'react'
import { graphql } from 'gatsby'

import BlogPostListing from '../components/blog-post-listing'

export default function BlogPage({ data }) {
  return (
    <React.Fragment>
      <BlogPostListing posts={data.allBlogPost.nodes} />
    </React.Fragment>
  )
}

export const blogPostQuery = graphql`
  query GetAllBlogPosts {
    allBlogPost {
      nodes {
        title
        slug

        body {
          excerpt
          html
        }
      }
    }
  }
`
