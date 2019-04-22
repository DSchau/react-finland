import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Talk from './talk'

const Container = styled.section`
  
`

const Image = styled.img`
  height: 150px;
  width: 150px;
`

export default function Speaker({ name, about, company, image, social, location, talks, workshops }) {
  return (
    <Container>
      <Image src={image.url} title={image.title} />
      {name}
      <h3>Talks</h3>
      {
        talks.map(talk => (
          <Talk key={talk.title} {...talk} />
        ))
      }
      {workshops.length > 0 && (
        <>
      <h3>Workshops</h3>
        {
          workshops.map(workshop => (
            <Talk key={workshop.title} {...workshop} />
          ))
        }
        </>
      )}
    </Container>
  )
}

export const speakerFragment = graphql`
  fragment SpeakerDetails on conferences_Contact {
    name
    about
    company
    image {
      title
      url
    }
    social {
      twitter
      github
      linkedin
      homepage          
    }
    location {
      country {
        name
        code
      }
    }
    talks {
      ...TalkDetails
    }
    workshops {
      ...TalkDetails
    }
  }
`