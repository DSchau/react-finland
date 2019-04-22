import React from "react";
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

import Person from '../components/person'
import Sponsors from '../components/sponsors'

import { slugify } from '../util'

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Title = styled.h3`
  font-size: 30px;
`

const Group = ({ label, items }) => (
  <section>
    <Title>{label}</Title>
    <Grid>
      
    {items.map(item => (
      <Link key={item.name} to={`/speakers#${slugify(item.name)}`}>
      <Person {...item} />
      </Link>
    ))}
    </Grid>
  </section>
)

const getSpeakersAndWorkshops = items => items.reduce((merged, item) => {
  if (item.workshops && item.workshops.length > 0) {
    merged.workshops.push(item)
  } else {
    merged.speakers.push(item)
  }
  return merged
}, { speakers: [], workshops: [] })

function Index({ data }) {
  const { reactFinland: { conference }} = data
  const { speakers, workshops } = getSpeakersAndWorkshops(conference.speakers)
  return (
      <>
      <Group label="MCs" items={conference.mcs} />
      <Group label="Workshop Instructors" items={workshops} />
      <Group label="Speakers" items={speakers} />
      <tito-widget event="react-finland/2019">
        Loading. Patience my padawan!
      </tito-widget>
      <Sponsors />
    </>
  )
}

export const indexQuery = graphql`
  query IndexQuery {
    reactFinland {
      conference(id: "react-finland-2019") {
        mcs {
          ...SpeakerDetails
        }
        speakers {
          ...SpeakerDetails
          workshops {
            type
          }
        }
      }
    }
  }
`

export default Index
