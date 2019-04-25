import React from 'react'

import BlogPostPreview from './blog-post-preview'

export default function BlogPostListing({ posts }) {
  return (
    <React.Fragment>
      {posts.map(post => (
        <BlogPostPreview key={post.title} {...post} />
      ))}
    </React.Fragment>
  )
}
