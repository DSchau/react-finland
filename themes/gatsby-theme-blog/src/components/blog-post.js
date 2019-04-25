import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

export default function BlogPost({ author, title, body }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <div dangerouslySetInnerHTML={{ __html: body.html }} />
    </React.Fragment>
  );
}
