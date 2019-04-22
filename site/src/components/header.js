import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import format from 'date-fns/format'

import Countdown from './countdown'
import Navigation from './navigation'

import waves from '../style/waves'

import logo from '../assets/img/logo.svg'

const Container = styled.header`
  margin: 0;
  padding: 0;

  ${waves}
`

const Logo = styled.img`
  width: auto;
  height: auto;
  margin-right: 12px;
`

export default function Header({ isHome }) {
  const { reactFinland: { conference }} = useStaticQuery(headerQuery)

  const location = conference.locations[0]

  return (
    <Container isHome={isHome} size={isHome && `25rem`}>
      <Navigation />
      {isHome && (
        <>
          <Logo src={logo} />
          <h3>{conference.slogan}</h3>
          <h3>{[location.city, location.country.name].join(', ')}</h3>
          <h3>
            {`${format(new Date(conference.startDate), 'DD')}-${format(new Date(conference.endDate), 'DD')}.${format(new Date(conference.startDate), 'MM')}.${conference.year}`}
          </h3>
          <Countdown toDate="2019-04-24" />
        </>
      )}
    </Container>
  )
}

export const headerQuery = graphql`
{
  reactFinland {
    conference(id:"react-finland-2019") {
      slogan
      startDate
      endDate
      year
      locations {
        city
        country {
          name
        }
      }
    }
  }
}
`
