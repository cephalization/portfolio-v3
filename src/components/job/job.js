import React from "react"
import styled from "styled-components"

const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: white;
  height: 400px;
  width: 300px;
  color: #273036;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2),
    0 2px 5px 0 rgba(14, 30, 37, 0.56);
  border-radius: 8px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const Job = ({ job }) => (
  <Card>
    <p>{job.position}</p>
  </Card>
)
