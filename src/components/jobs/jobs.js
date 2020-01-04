import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "../styled"
import { Job } from "../../components/job"
import { JOBS } from "../../jobs"

const Container = styled.div`
  margin-top: -11rem;
  margin-left: 12rem;
  margin-right: 10rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 1280px) {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: -6rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: -10rem;
  }

  @media screen and (max-width: 520px) {
    margin-top: -5rem;
  }
`

const JobContainer = styled.div`
  margin: 1rem 0;
`

const DEFAULT_CARDS = 2

const ShowMore = styled(Button)`
  background: white;
  border: 1px solid #4c80b0;
  &:hover {
    background: #4c80b0;
  }
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
