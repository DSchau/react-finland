import React from 'react'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'
import styled from '@emotion/styled'
import format from 'date-fns/format'

import Countdown from './countdown'
import Navigation from './navigation'
import Search from './search'
import Logo from './logo'

import waves from '../style/waves'

const Container = styled.header`
  ${waves}

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  flex-direction: column;

  margin: 0;
  padding: 1rem;
  padding-bottom: 48px;
`

const Title = styled.h2`
  font-size: 60px;
  text-align: center;
  margin-top: 0.5rem;
`

const Subtitle = styled.h3`
  font-size: 30px;

  padding: 0.25rem 1rem;
  margin: 1rem 0;
`

const Box = styled.div`
  display: flex;
`

const LinkContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  margin: 0.5rem 0;
`

const Link = styled.a`
  display: inline-block;

  color: #f3f7f9;
  background-color: #002fa9;
  text-align: center;
  border: 4px solid transparent;

  font-size: 30px;

  padding: 1rem;
  margin: 1rem auto;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: transparent;
    color: #002fa9;
    border-color: #002fa9;
  }
`

const SearchBar = styled(Search)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

export default function Header({ isHome }) {
  const { site: { siteMetadata }, reactFinland: { conference }} = useStaticQuery(headerQuery)

  const location = conference.locations[0]

  return (
    <>
    <Container isHome={isHome} size={isHome && `25rem`}>
      <SearchBar />
      <Navigation />
        <GatsbyLink to="/" css={{ color: `inherit`, textDecoration: `none`, textAlign: `center` }}>
          <Logo />
        </GatsbyLink>
        <Title>{siteMetadata.title}</Title>
        {isHome && (
          <>
        <Subtitle css={{ backgroundColor: `#002fa9`, color: `#f3f7f9`, padding: `1rem`, fontStyle: `italic` }}>{conference.slogan}</Subtitle>
        <Box>
        <Subtitle>
          {`${format(new Date(conference.startDate), 'DD')}-${format(new Date(conference.endDate), 'DD')}.${format(new Date(conference.startDate), 'MM')}.${conference.year}`}
        </Subtitle>
        <Subtitle>{[location.city, location.country.name].join(', ')}</Subtitle>
        </Box>
        <Countdown toDate="2019-04-24">
          {({ days, hours, minutes, seconds }) => (
            <Subtitle css={{ fontSize: 24, padding: `1rem 0.25rem`, borderBottom: `1px solid white`, borderTop: `1px solid white` }}>
            Coming in:
            <span css={{ marginLeft: '0.25rem' }}>
            {[
              `${days} day${days > 1 ? 's' : ''}`,
              `${hours}h`,
              `${minutes}m`,
              `${seconds}s`,
            ].join(' ')}
            </span>
            </Subtitle>
          )}
        </Countdown>
          </>
        )}
        
    </Container>
    {isHome && <LinkContainer><Link href="#tickets">Buy tickets</Link></LinkContainer>}
    </>
  )
}

export const headerQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }

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
