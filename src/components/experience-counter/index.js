import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { JOBS } from "../../jobs"
import moment from "moment"

const StyledText = styled.p`
  font-size: 2.5rem;
  margin-top: 4rem;
  padding-left: 4rem;
`

const StyledTime = styled.span`
  color: #4c80b0;
`

const getMyExperience = startDate => {
  const start = moment(startDate, "MM YY")
  const now = moment()

  const years = now.diff(start, "years")
  const days = now.diff(start, "days") - years * 365
  const seconds = now.diff(start, "seconds") - days * 86400

  return {
    years,
    days,
    seconds,
  }
}

const firstProgrammingJob = JOBS[JOBS.length - 2].start

export const ExperienceCounter = () => {
  const [counter, setCounter] = useState(getMyExperience(firstProgrammingJob))

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(getMyExperience(firstProgrammingJob))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <StyledText>
      <StyledTime>{counter.years}</StyledTime> years,
      <br />
      <StyledTime>{counter.days}</StyledTime> days,
      <br />
      and
      <br />
      <StyledTime>{counter.seconds}</StyledTime> seconds.
    </StyledText>
  )
}
