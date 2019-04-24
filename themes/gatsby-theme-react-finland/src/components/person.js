import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  margin: 1rem;
  text-align: center;
`

const Name = styled.h4`
  margin-top: 0.25rem;
  font-size: 20px;
`

const Image = styled.img`
  width: 100px;
  border-radius: 100%;
`

export default function Person({ className, name, image }) {
  return (
    <Container className={className}>
      <Image src={image.url} />
      <Name>{name}</Name>
    </Container>
  )
}
