import React from "react"
import styled from "styled-components"
import { lengthOfTime } from "../../utils/length-of-time"

const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: white;
  height: 200px;
  color: #273036;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2),
    0 2px 5px 0 rgba(14, 30, 37, 0.56);
  border-radius: 8px;
`

const Headline = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
  justify-content: space-between;
`

const Position = styled.p`
  font-family: "Rubik";
  letter-spacing: 0.05em;
  font-size: 0.9rem;
  margin: auto 0px;
`

const Duration = styled.p`
  font-family: "Roboto";
  opacity: 0.8;
  font-size: 0.8rem;
`

const Company = styled.p`
  font-family: "Roboto";
  opacity: 0.8;
  font-size: 0.8rem;
  margin: auto 0px;
`

export const Job = ({ job }) => (
  <Card>
    <Headline>
      <Position>{job.position}</Position>
      <Duration>{lengthOfTime(job)}</Duration>
    </Headline>
    <Company>{job.company}</Company>
  </Card>
)
