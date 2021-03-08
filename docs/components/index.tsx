import React from 'react'
import { Container, RS, Space } from '../../src'

export const SampleBox: React.FC = props => {
  return (
    <Container background="gray" padding={10} contrastingColor="#fff">
      {props.children}
    </Container>
  )
}

export const CodeSample: React.FC<{
  title?: string
  desc?: string
}> = props => {
  return (
    <Space box="flex" direction="vertical" size={5}>
      <div>
        <strong>{props.title}</strong>
        <br />
        {props.desc}
      </div>
      <div>{props.children}</div>
    </Space>
  )
}

export const Section: React.FC<{ title?: string }> = props => {
  return (
    <>
      <RS.Content data-screen={props.title}>
        <Container
          margin="24px 0"
          padding="24px 48px"
          borderRadius={2}
          background="#fff"
        >
          <h2>{props.title}</h2>
          <div>{props.children}</div>
        </Container>
      </RS.Content>
    </>
  )
}
