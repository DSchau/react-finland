import React from 'react'
import { graphql } from 'gatsby'

import BlogPost from '../components/blog-post'

export default function BlogPostTemplate({ data }) {
  return <BlogPost {...data.blogPost} />
}

export const blogPostQuery = graphql`
  query BlogPostBySlug($slug:String!) {
    blogPost(slug:{
      eq: $slug
    }) {
      title
      author
      body {
        html
      }
    }
  }
`
