import React from "react"
import styled from "styled-components"

const Body = styled.div`
  padding: 50px;
`

const Intro = styled.h1`
  font-family: "Rubik";
  font-size: 3rem;
  color: #273036;
`

const Focus = styled.span`
  font-style: italic;
  font-size: 3.2rem;
  color: #4c80b0;
`

export default () => (
  <Body>
    <Intro>
      Hi! <br /> My name is <Focus>Anthony Powell</Focus>,
      <br /> but most people call me <Focus>Tony</Focus>.
    </Intro>
  </Body>
)
