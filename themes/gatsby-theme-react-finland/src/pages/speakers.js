import React from 'react'
import { graphql } from 'gatsby'

import Speaker from '../components/speaker'

export default function Speakers({ data }) {
  return (
    <>
      {
        data.reactFinland.conference.speakers.map(speaker => (
          <Speaker key={speaker.name} {...speaker} />
        ))
      }
    </>
  )
}

export const speakersQuery = graphql`
  query GetAllSpeakers {
    reactFinland {
      conference(id: "react-finland-2019") {
        speakers {
          ...SpeakerDetails
        }
      }
    }
  }
`