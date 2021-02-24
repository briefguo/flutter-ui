import React from 'react'
import { Container, Space } from '../../src'

const SampleBox: React.FC = props => {
  return (
    <Container background="gray" padding={10} contrastingColor="#fff">
      {props.children}
    </Container>
  )
}

const CodeSample: React.FC<{ title?: string }> = props => {
  return (
    <>
      <Space box="flex" direction="vertical" size={5}>
        <h5>{props.title}</h5>
        <div>{props.children}</div>
      </Space>
    </>
  )
}

const SampleGroup: React.FC<{ children: React.ReactElement[] }> = props => {
  return (
    <Space box="flex" direction="vertical" size={12}>
      {props.children}
    </Space>
  )
}

export const SpaceCase = () => {
  return (
    <Space box="flex" size={24}>
      <SampleGroup>
        <h4>垂直</h4>
        <CodeSample title="行内">
          <Space direction="vertical" size={10}>
            <SampleBox>1</SampleBox>
            <SampleBox>2</SampleBox>
            <SampleBox>3</SampleBox>
            <SampleBox>4</SampleBox>
          </Space>
        </CodeSample>
        <CodeSample title="块">
          <Space box="flex" direction="vertical" size={10}>
            <SampleBox>1</SampleBox>
            <SampleBox>2</SampleBox>
            <SampleBox>3</SampleBox>
            <SampleBox>4</SampleBox>
          </Space>
        </CodeSample>
      </SampleGroup>
      <SampleGroup>
        <h4>水平</h4>
        <CodeSample title="行内">
          <Space direction="horizen" size={24} align="center">
            <SampleBox>1</SampleBox>
            <SampleBox>2</SampleBox>
            <SampleBox>3</SampleBox>
            <SampleBox>4</SampleBox>
          </Space>
        </CodeSample>
        <CodeSample title="块">
          <Space box="flex" direction="horizen" size={24} align="flex-end">
            <SampleBox>1</SampleBox>
            <SampleBox>2</SampleBox>
            <SampleBox>3</SampleBox>
            <SampleBox>4</SampleBox>
          </Space>
        </CodeSample>
      </SampleGroup>
    </Space>
  )
}
