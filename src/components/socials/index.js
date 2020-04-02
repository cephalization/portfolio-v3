import React from "react"
import styled from "styled-components"

import Github from "../icons/github.svg"
import Twitter from "../icons/Twitter.svg"
import LinkedIn from "../icons/linkedin.svg"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    justify-content: space-between;
  }
`

const Icon = styled.a`
  height: 3rem;
  width: 3rem;
  margin: 1rem 3rem;

  @media screen and (max-width: 768px) {
    margin: 1rem;
  }
`

export const Socials = () => (
  <Container>
    <Icon href="https://github.com/cephalization">
      <Github />
    </Icon>
    <Icon href="https://twitter.com/Cephalization">
      <Twitter />
    </Icon>
    <Icon href="https://linkedin.com/in/anthony-powell-05788696/">
      <LinkedIn />
    </Icon>
  </Container>
)
