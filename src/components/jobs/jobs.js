import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "../styled"
import { Job } from "../../components/job"
import { JOBS } from "../../jobs"

const Container = styled.div``

const JobContainer = styled.div``

const DEFAULT_CARDS = 2

const ShowMore = styled(Button)`
  background-color: white;
  border: 1px solid #273036;
  &:hover {
    background-color: #273036;
  }
  transition: all 0.3s ease;
`

export const Jobs = () => {
  const [showMore, setShowMore] = useState(false)
  const toggleShowMore = () => setShowMore(show => !show)

  const initJobs = JOBS.slice(0, showMore ? JOBS.length : DEFAULT_CARDS)

  return (
    <Container>
      <JobContainer>
        {initJobs.map((job, i) => (
          <Job
            key={`${job.company}__${job.position}`}
            job={job}
            prevJob={initJobs[i - 1]}
          />
        ))}
      </JobContainer>

      {!showMore && <ShowMore onClick={toggleShowMore}>Show more</ShowMore>}
    </Container>
  )
}
