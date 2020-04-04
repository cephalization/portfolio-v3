import React from "react"

import { WaveBottom } from "../components/wave-bottom"
import {
  Content,
  Focus,
  Group1Transition,
  Group2Transition,
  Group3Transition,
  Name,
  Section,
  Global,
} from "../components/styled"
import { Jobs } from "../components/jobs"
import { Socials } from "../components/socials"
import { ExperienceCounter } from "../components/experience-counter"

import "../index.css"

export default () => (
  <>
    <Content>
      <Group1Transition>
        <Section>
          <Focus>
            Hello!{" "}
            <span role="img" aria-label="wave hello">
              👋
            </span>
          </Focus>
          <br />
          My name is <Name>Anthony Powell</Name>,
          <br />
          but most people call me <Name>Tony</Name>.
        </Section>
      </Group1Transition>
      <Group2Transition>
        <Section>
          I build web applications for internet companies and
          <br />
          I've been doing it professionally for around <ExperienceCounter />
        </Section>
      </Group2Transition>
      <Group3Transition>
        <Section>
          Here are my recent experiences
          <br />
          <br />
          <br />
          <Jobs />
        </Section>
      </Group3Transition>
      <Group3Transition>
        <Section>
          You can check out my projects and other interests at these links
          <br />
          <br />
          <br />
          <Socials />
        </Section>
      </Group3Transition>
    </Content>
    <WaveBottom />
    <Global />
  </>
)
