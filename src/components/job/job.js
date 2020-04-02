import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { Button, Focus } from "../styled"
import { lengthOfTime } from "../../utils/length-of-time"

const JobSection = styled.div`
  font-size: 1.3rem;
`

const JobContent = styled.div`
  border-left: 2px solid #273036;
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
  border-radius: 4px;
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
  margin-bottom: 0.2rem;
  color: #273036;
`

const Duration = styled.p`
  font-family: "Roboto";
  opacity: 0.6;
  margin-top: 0;
`

const Company = styled(Focus)`
  padding: 1rem;
  font-family: "Roboto";
  letter-spacing: 0.02em;
  line-height: 1.8rem;
  color: white;
  font-size: 1.5rem;
  background-color: #273036;
  margin: 0;
`

const Description = styled.pre`
  font-family: "Rubik";
  opacity: 0.9;
  white-space: pre-wrap;
  margin-bottom: 0;
`

const Details = styled.ul`
  font-family: "Rubik";
  opacity: 0.8;
  margin-bottom: 0;
  margin-top: 1rem;
  font-size: 1.2rem;
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
              {job.details.map((detail, idx) => (
                // safe to use index as key since collection is static
                <li key={idx}>{detail}</li>
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
