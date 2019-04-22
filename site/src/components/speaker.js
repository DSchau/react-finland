import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Social from './social'
import Talk from './talk'

import { slugify } from '../util'

const Container = styled.section`
  display: flex;
  align-items: center;

  flex-direction: column;
  margin: 2rem 0;
  padding: 0.5rem;

  @media only screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

const Image = styled.img`
  height: 100px;
  width: 100px;

  min-width: 100px;

  border-radius: 100%;
  margin: 1rem 0;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    margin-right: 1rem;
  }
`

const Title = styled.h2`
  font-size: 36px;
`

const About = styled.p`
  margin: 2rem 0;
`

const Subtitle = styled.h3`
  font-size: 20px;
  margin: 1rem 0;
`


export default function Speaker({ name, about, company, id, image, social, location, talks, workshops }) {
  return (
    <Container id={id}>
      <Image src={image.url} title={image.title} />
      <div>
        <Title id={slugify(name)}>{name}</Title>
        <Social {...social} />
        <About css={{ margin: `0.5rem 0` }}>{about}</About>
        <Subtitle>Talks</Subtitle>
        {
          talks.map(talk => (
            <Talk key={talk.title} {...talk} />
          ))
        }
        {workshops.length > 0 && (
          <>
        <Subtitle>Workshops</Subtitle>
          {
            workshops.map(workshop => (
              <Talk key={workshop.title} {...workshop} />
            ))
          }
          </>
        )}
      </div>
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