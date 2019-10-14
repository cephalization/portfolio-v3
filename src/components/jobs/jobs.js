import React, { useState, useEffect } from "react"
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
    margin-right: 2rem
    margin-top: -6rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: -4rem;
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

const getNumberOfDefaultCards = width => {
  if (width > 1900) {
    return 4
  }

  if (width > 768) {
    return 3
  }

  return 2
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
