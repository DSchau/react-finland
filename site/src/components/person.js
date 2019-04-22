import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  margin: 1rem;
  text-align: center;
`

const Image = styled.img`
  width: 100px;
  border-radius: 100%;
`

export default function Person({ name, image }) {
  return (
    <Container>
      <Image src={image.url} />
      <h4>{name}</h4>
    </Container>
  )
}
