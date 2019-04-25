import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import format from "date-fns/format"

import Person from "./person"

const Container = styled.section`
  margin: 2rem 0;
`

const Title = styled.h2`
  font-size: 36px;
`

const Intervals = styled.dl``

const PersonSchedule = styled(Person)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 0;

  > img {
    height: 32px;
    width: 32px;
  }
`

export default function Schedule({ day, description, intervals }) {
  return (
    <Container>
      <Title>{`${format(day, "DD.MM")} - ${description}`}</Title>
      <Intervals>
        {intervals.map(({ begin, end, title, sessions }, index) => (
          <React.Fragment key={`${day}-${title}`}>
            <dt key={`dt-${index}`}>
              {begin}–{end}
            </dt>
            <dd key={`dd-${index}`}>
              {title && <h3>{title}</h3>}
              {sessions.map(session => (
                <React.Fragment key={session.title}>
                  {session.title}
                  {(session.people || []).map(person => (
                    <PersonSchedule {...person} />
                  ))}
                </React.Fragment>
              ))}
            </dd>
          </React.Fragment>
        ))}
      </Intervals>
    </Container>
  )
}

export const scheduleFragment = graphql`
  fragment ScheduleDetails on conferences_Schedule {
    day
    description
    intervals {
      begin
      end
      title
      sessions {
        type
        title
        keywords
        people {
          name
          image {
            url
          }
        }
      }
    }
  }
`
