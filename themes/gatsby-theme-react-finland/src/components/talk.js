import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.section``

const Title = styled.h4`
  font-size: 24px;

  margin: 1rem 0;
`

export default function Talk({
  className,
  type,
  title,
  description,
  keywords,
}) {
  return (
    <Container className={className}>
      <Title>{title}</Title>
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
