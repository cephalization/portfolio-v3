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

const Intro = styled.div`
  font-family: "Rubik";
  font-size: 4rem;
  color: #273036;
  margin-top: 10rem;
  margin-left: 10rem;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem
    margin-top: 5rem;
    margin-left: 0;
  }
`

const Focus = styled.h2`
  display: inline-block;
  margin: .4rem 0
  font-style: italic;
  font-size: 5rem;
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`

const Name = styled(Focus)`
  color: #4c80b0;
`

const FadeIn = styled.div`
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Group1Transition = styled(FadeIn)`
  animation: 1s fadein;
`

const Group2Transition = styled(FadeIn)`
  animation: 1.5s fadein;
`

const Group3Transition = styled(FadeIn)`
  animation: 1.6s fadein;
`

export default () => (
  <>
    <Body>
      <Intro>
        <Group1Transition>
          <Focus>Hello! 👋</Focus>
        </Group1Transition>
        <Group2Transition>
          My name is <br />
          <Name>Anthony Powell</Name>
          <br />
        </Group2Transition>
        <Group3Transition>
          but most people call me
          <br /> <Name>Tony</Name>
        </Group3Transition>
      </Intro>
    </Body>
  </>
)
