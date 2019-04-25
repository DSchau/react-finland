import React from 'react';
import { Link } from 'gatsby';

export default function BlogPostPreview({ title, slug, body }) {
  return (
    <section>
      <Link to={slug}>
        <h1>{title}</h1>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: body.excerpt }} />
    </section>
  );
}
