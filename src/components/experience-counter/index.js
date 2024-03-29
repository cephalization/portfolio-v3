import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { JOBS } from "../../jobs"
import moment from "moment"

const StyledText = styled.p``

const StyledTime = styled.span`
  color: #4c80b0;
  min-width: 9rem;
  display: inline-block;
  @media screen and (max-width: 768px) {
    min-width: 8rem;
  }
`

const getMyExperience = startDate => {
  const start = moment(startDate, "MM YY")
  const now = moment()

  const years = now.diff(start, "years")
  const days = now.diff(start, "days") - years * 365
  const seconds = now.diff(moment().startOf("day"), "seconds")

  console.log(seconds)

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
      <StyledTime />
      {" and"}
      <br />
      <StyledTime>{counter.seconds}</StyledTime> seconds.
    </StyledText>
  )
}
