import React from 'react'
import { Background, Center, SingleVideoBackground } from '../../src'
import { SampleBox, Section } from '../components'

export const BaseCase = () => {
  return (
    <Section title="基础组件">
      <div>
        <h3>Background</h3>
        <p>背景内容容器</p>
        <Background
          src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
          height={200}
        >
          <Center>
            <SampleBox>1</SampleBox>
            <SampleBox>2</SampleBox>
            <SampleBox>3</SampleBox>
          </Center>
        </Background>
        <SingleVideoBackground
          src="https://file.cdn.sunmi.com/newebsite/products/t2s/screen-1-video-lg.mp4"
          height={500}
          width="100%"
        >
          <Center>
            <SampleBox>1</SampleBox>
            <SampleBox>2</SampleBox>
            <SampleBox>3</SampleBox>
          </Center>
        </SingleVideoBackground>
      </div>
    </Section>
  )
}
