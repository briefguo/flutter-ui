import React from 'react'
import { Background, Layout, Space } from '../../src'
import { CodeSample, SampleBox } from '../components'

export const SpaceCase = () => {
  return (
    <CodeSample title="Layout">
      <p>Layout组件会充满父级元素，并按照alignment指定的位置来布局</p>
      <Space box="flex" direction="vertical" size={24}>
        <Space box="flex" size={24}>
          <Background
            src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
            height={200}
          >
            <Layout>
              <SampleBox>alignment="default"</SampleBox>
            </Layout>
          </Background>
          <Background
            src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
            height={200}
          >
            <Layout alignment="leftCenter">
              <SampleBox>alignment="leftCenter"</SampleBox>
            </Layout>
          </Background>
          <Background
            src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
            height={200}
          >
            <Layout alignment="leftBottom">
              <SampleBox>alignment="leftBottom"</SampleBox>
            </Layout>
          </Background>
        </Space>
        <Space box="flex" size={24}>
          <Background
            src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
            height={200}
          >
            <Layout alignment="rightTop">
              <SampleBox>alignment="rightTop"</SampleBox>
            </Layout>
          </Background>
          <Background
            src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
            height={200}
          >
            <Layout alignment="rightCenter">
              <SampleBox>alignment="rightCenter"</SampleBox>
            </Layout>
          </Background>
          <Background
            src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
            height={200}
          >
            <Layout alignment="rightBottom">
              <SampleBox>alignment="rightBottom"</SampleBox>
            </Layout>
          </Background>
          <Background
            src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
            height={200}
          >
            <Layout alignment="center">
              <SampleBox>alignment="center"</SampleBox>
            </Layout>
          </Background>
        </Space>
      </Space>
    </CodeSample>
  )
}
