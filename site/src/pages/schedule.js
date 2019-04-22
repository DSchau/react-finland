import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Schedule from '../components/schedule'

export default function ScheudlePage({ data }) {
  return (
    <>
      {
        data.reactFinland.conference.schedules.map(schedule => (
          <Schedule key={schedule.day} {...schedule} />
        ))
      }
    </>
  )
}

export const scheduleQuery = graphql`
  query GetSchedule {
    reactFinland {
      conference(id: "react-finland-2019") {
        schedules {
          ...ScheduleDetails
        }
      }
    }
  }
`