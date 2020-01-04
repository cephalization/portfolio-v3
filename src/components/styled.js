import styled from "styled-components"

export const Body = styled.div`
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

export const Section = styled.section`
  padding: 50px;
  font-size: 4rem;
`

export const Intro = styled(Section)`
  font-family: "Rubik";
  color: #273036;
`

export const Text = styled.div`
  margin-top: 10rem;
  margin-left: 10rem;
  @media screen and (max-width: 1280px) {
    font-size: 2.5rem;
    margin-top: 5rem;
    margin-left: 1rem;
  }
`

export const Content = styled.section`
  background-color: #273036;
  color: #fcffff;
  font-family: "Roboto";
  width: 100vw;
`

export const ContentContainer = styled.div`
  font-size: 3rem;
  font-weight: bold;
  flex: 1;
  height: 15rem;
  @media screen and (max-width: 768px) {
    height: 20rem;
  }
`

export const ContentText = styled(Text)`
  margin-top: 0;
`

export const Focus = styled.h2`
  display: inline-block;
  margin: 0.4rem 0;
  font-style: italic;
  font-size: 5rem;
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`

export const Name = styled(Focus)`
  color: #4c80b0;
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
