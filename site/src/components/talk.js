import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

const Container = styled.section`
  
`

export default function Talk({ type, title, description, keywords }) {
  return (
    <Container>
      <h4>{title}</h4>
      <p>{description}</p>
    </Container>
  )
}

export const talkFragment = graphql`
  fragment TalkDetails on conferences_Session {
    type
    title
    description
    keywords
  }
`