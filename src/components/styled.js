import styled, { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
  body {
    height: 100vh;
    background-image: url("wave.svg");
    background-repeat: no-repeat;
    @media screen and (max-width: 768px) {
      background-position-x: 45%;
      background-size: 200%;
    }
    color: #273036;
    font-family: "Rubik";
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
  }
`

export const Body = styled.div``

export const Section = styled.section`
  padding: 1rem;
`

export const Intro = styled(Section)`
  padding-top: 4rem;
  color: #273036;
`

export const Text = styled.div`
  @media screen and (max-width: 1280px) {
  }
`

export const Content = styled(Section)`
  padding: 10vh 10vw;
  padding-bottom: 1vh;
  flex: 1;
  @media screen and (max-width: 768px) {
    padding-left: 1rem;
  }
`

export const ContentOffset = styled.span`
  margin-top: -2rem;
  z-index: 0;
`

export const ContentContainer = styled.div``

export const ContentText = styled(Text)``

export const Focus = styled.h2`
  display: inline-block;
  margin: 0.2rem 0;
  font-style: italic;
`

export const Name = styled(Focus)`
  color: #4c80b0;
  font-size: 2rem;
`

export const FadeIn = styled.div`
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Group1Transition = styled(FadeIn)`
  animation: 1s fadein;
`

export const Group2Transition = styled(FadeIn)`
  animation: 1.5s fadein;
`

export const Group3Transition = styled(FadeIn)`
  animation: 1.6s fadein;
`

export const Button = styled.button`
  margin-top: 1rem;
  width: fit-content;
  display: flex;
  justify-self: right;
  justify-content: center;
  border-radius: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background: none;
  border: 1px solid #273036;
  font-weight: 500;
  font-family: "Roboto";
  letter-spacing: 0.01rem;
  cursor: pointer;
  &:hover {
    background: #273036;
    color: white;
  }
`
