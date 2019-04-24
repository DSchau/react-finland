import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Container = styled.section`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #eee;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.125);
`

const Title = styled.h1`
  font-size: 32px;
`


export default function BlogPostPreview(props) {
  return (
    <Container>
      <Link to={props.slug}><Title>{props.title}</Title></Link>
      <p css={{ margin: '1rem 0' }}>{props.body.excerpt}</p>
    </Container>
  )
}
