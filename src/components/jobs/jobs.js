import React, { useState } from "react"
import styled from "styled-components"

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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 50px;
`

const Button = styled.button``

const DEFAULT_CARDS = 2

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

      {!showMore && (
        <ButtonContainer>
          <Button onClick={toggleShowMore}>Show more</Button>
        </ButtonContainer>
      )}
    </Container>
  )
}
