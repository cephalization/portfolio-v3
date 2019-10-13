import React, { useState } from "react"
import styled from "styled-components"

import { Job } from "../../components/job"

import { JOBS } from "../../jobs"

const Container = styled.div`
  margin-top: -11rem;
  margin-left: 12rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem
    margin-left: 2rem;
  }
`

const JobContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.9%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 50px;
`

const Button = styled.button``

export const Jobs = () => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => setShowMore(show => !show)

  return (
    <Container>
      <JobContainer>
        {JOBS.slice(0, showMore ? JOBS.length : 3).map(job => (
          <Job key={`${job.company}__${job.position}`} job={job} />
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
