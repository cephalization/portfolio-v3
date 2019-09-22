import React from "react"
import styled from "styled-components"
import "../index.css"

const Body = styled.div`
  padding: 50px;
  background-image: url("wave.svg");
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-position-x: 45%;
    background-size: 200%;
  }
`

const Intro = styled.h1`
  font-family: "Rubik";
  font-size: 4rem;
  color: #273036;
  margin-top: 15rem;
  margin-left: 10rem;
  @media screen and (max-width: 768px) {
    margin-top: 5rem;
    margin-left: 1rem;
  }
`

const Focus = styled.span`
  font-style: italic;
  font-size: 5rem;
  color: #4c80b0;
`

export default () => (
  <>
    <Body>
      <Intro>
        Hi! <br /> My name is <br />
        <Focus>Anthony Powell</Focus>,
        <br /> but most people call me
        <br /> <Focus>Tony</Focus>.
      </Intro>
    </Body>
  </>
)
