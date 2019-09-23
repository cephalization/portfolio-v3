import React from "react"

import { WaveBottom } from "../components/wave-bottom"
import {
  Body,
  Content,
  ContentContainer,
  ContentText,
  Focus,
  Group1Transition,
  Group2Transition,
  Group3Transition,
  Intro,
  Name,
  Text,
} from "../components/styled"

import "../index.css"

export default () => (
  <>
    <Body>
      <Intro>
        <Text>
          <Group1Transition>
            <Focus>
              Hello!{" "}
              <span role="img" aria-label="wave hello">
                👋
              </span>
            </Focus>
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
