import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { Button } from "../styled"
import { lengthOfTime } from "../../utils/length-of-time"

const JobSection = styled.div``

const JobContent = styled.div`
  border-left: 1px solid white;
  padding: 1rem;
`

const InnerContent = styled.div`
  @keyframes slidein {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  display: grid;
  grid-template-rows: repeat(minmax(auto-fit, 1fr));
  animation: 0.75s cubic-bezier(0.075, 0.82, 0.165, 1) slidein;
  padding: 1rem;
  background-color: white;
  color: #273036;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2),
    0 2px 5px 0 rgba(14, 30, 37, 0.56);
  border-radius: 8px;
  margin-left: 2rem;
  margin-bottom: 0;
  margin-top: 0;
  margin-right: 0;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  width: 100%;
`

const Headline = styled.div``

const Position = styled.p`
  font-family: "Rubik";
  letter-spacing: 0.03em;
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
  color: #273036;
`

const Duration = styled.p`
  font-family: "Roboto";
  opacity: 0.8;
  font-size: 1rem;
  margin-top: 0;
`

const Company = styled.p`
  font-family: "Roboto";
  font-size: 2rem;
  letter-spacing: 0.02em;
`

const Description = styled.pre`
  font-family: "Rubik";
  font-size: 1.2rem;
  opacity: 0.9;
  white-space: pre-wrap;
  margin-bottom: 0;
`

const Details = styled.ul`
  font-family: "Rubik";
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 0;
  margin-top: 0.5rem;
`

export const Job = ({ job, prevJob = {} }) => {
  const [showDetails, toggleShowDetails] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      toggleShowDetails(true)
    }
  }, [])

  return (
    <JobSection>
      {prevJob.company !== job.company && <Company>{job.company}</Company>}
      <JobContent>
        <InnerContent>
          <Headline>
            <Position>{job.position}</Position>
            <Duration>{lengthOfTime(job)}</Duration>
          </Headline>
          {job.description && (
            <Description>
              {job.description && job.description.trim()}
            </Description>
          )}
          {showDetails ? (
            <Details>
              {job.details.map(detail => (
                <li>{detail}</li>
              ))}
            </Details>
          ) : (
            <Button type="button" onClick={() => toggleShowDetails(true)}>
              More details
            </Button>
          )}
        </InnerContent>
      </JobContent>
    </JobSection>
  )
}
