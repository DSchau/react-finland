import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.figure`
  :hover img {
    transform: scale(1.1);
  }
`

const Image = styled.img`
  width: auto;
  max-height: 100px;
  max-width: 250px;

  transition: transform 0.2s ease-in-out;
`

export default function Sponsor({ name, image, social }) {
  return (
    <Container>
      <a
        href={social.homepage}
        target="_blank"
        rel="noopener noreferrer"
        title={name}
      >
        <Image src={image.url} />
      </a>
    </Container>
  )
}

export const sponsorFragment = graphql`
  fragment SponsorDetails on conferences_Contact {
    name
    image {
      url
    }
    social {
      homepage
    }
  }
`
