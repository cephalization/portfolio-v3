import React from "react"
import styled from "styled-components"
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
  margin: 1rem;
  padding: 1rem;
  background-color: white;
  color: #273036;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2),
    0 2px 5px 0 rgba(14, 30, 37, 0.56);
  border-radius: 8px;
  margin-left: 2rem;
`

const Headline = styled.div``

const Position = styled.p`
  font-family: "Rubik";
  letter-spacing: 0.03em;
  font-size: 1rem;
  margin-bottom: 0.2rem;
`

const Duration = styled.p`
  font-family: "Roboto";
  opacity: 0.8;
  font-size: 0.8rem;
  margin-top: 0;
`

const Company = styled.p`
  font-family: "Roboto";
  opacity: 0.8;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
`

const Description = styled.pre`
  font-family: "Rubik";
  font-size: 1rem;
  opacity: 0.9;
  white-space: pre-wrap;
`

export const Job = ({ job, prevJob = {} }) => (
  <JobSection>
    {prevJob.company !== job.company && <Company>{job.company}</Company>}
    <JobContent>
      <InnerContent>
        <Headline>
          <Position>{job.position}</Position>
          <Duration>{lengthOfTime(job)}</Duration>
        </Headline>
        <Description>{job.description && job.description.trim()}</Description>
      </InnerContent>
    </JobContent>
  </JobSection>
)
