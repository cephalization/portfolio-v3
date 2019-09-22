import React from "react"
import styled from "styled-components"

import { WaveBottom } from "../components/wave-bottom"

import "../index.css"

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url("wave.svg");
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-position-x: 45%;
    background-size: 200%;
  }
`

const Section = styled.section`
  padding: 50px;
  font-size: 4rem;
`

const Intro = styled(Section)`
  font-family: "Rubik";
  color: #273036;
`

const Text = styled.div`
  margin-top: 10rem;
  margin-left: 10rem;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem
    margin-top: 5rem;
    margin-left: 0;
  }
`

const Content = styled.section`
  color: #fcffff;
  font-family: "Roboto";
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const ContentContainer = styled.div`
  background-color: #273036;
  padding: 50px;
  font-size: 3rem;
  font-weight: bold
  flex: 1;
`

const ContentText = styled(Text)`
  margin-top: 0;
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
        <Text>
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
        </Text>
      </Intro>
      <Content>
        <WaveBottom />
        <ContentContainer>
          <ContentText>
            I build web applications for internet companies
          </ContentText>
        </ContentContainer>
      </Content>
    </Body>
  </>
)
