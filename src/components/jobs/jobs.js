import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { Job } from "../../components/job"

import { JOBS } from "../../jobs"

const Container = styled.div``

const JobContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
`

const ButtonContainer = styled.div``

const Button = styled.button``

const getNumberOfDefaultCards = width => {
  if (width > 1900) {
    return 4
  }

  if (width > 768) {
    return 3
  }

  return 1
}

export const Jobs = () => {
  const [showMore, setShowMore] = useState(false)
  const [defaultCards, setDefaultCards] = useState(2)

  const toggleShowMore = () => setShowMore(show => !show)

  useEffect(() => {
    setDefaultCards(getNumberOfDefaultCards(window.innerWidth))
  }, [])

  return (
    <Container>
      <JobContainer>
        {JOBS.slice(0, showMore ? JOBS.length : defaultCards).map(job => (
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
