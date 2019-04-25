import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Sponsor from "./sponsor"

const Container = styled.section`
  margin: 1rem 0;
`

const Heading = styled.h3`
  font-size: 24px;
  margin: 1rem 0.5rem;

  grid-column: 2 / span 5;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Group = ({ label, sponsors }) => (
  <Container>
    <Heading>{label}</Heading>
    <List>
      {sponsors.map(sponsor => (
        <Sponsor key={sponsor.name} {...sponsor} />
      ))}
    </List>
  </Container>
)

export default function Sponsors({ includePartners = true }) {
  const {
    reactFinland: { conference },
  } = useStaticQuery(sponsorsQuery)
  const { bronzeSponsors, silverSponsors, goldSponsors, partners } = conference

  return (
    <>
      <Group label="🥇Gold Sponsors" sponsors={goldSponsors} />
      <Group label="🥈Silver Sponsors" sponsors={silverSponsors} />
      <Group label="🥉Bronze Sponsors" sponsors={bronzeSponsors} />
      {includePartners && <Group label="Partners" sponsors={partners} />}
    </>
  )
}

const sponsorsQuery = graphql`
  {
    reactFinland {
      conference(id: "react-finland-2019") {
        bronzeSponsors {
          ...SponsorDetails
        }
        silverSponsors {
          ...SponsorDetails
        }
        goldSponsors {
          ...SponsorDetails
        }
        partners {
          ...SponsorDetails
        }
      }
    }
  }
`
