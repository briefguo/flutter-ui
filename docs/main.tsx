import React from 'react'
import ReactDOM from 'react-dom'
import {
  ScreenScaffold,
  Container,
  Flex,
  Img,
  PageScaffold,
  Space,
  Text,
} from '../src'
import { CodeSample, SampleBox, Section } from './components'

const Test = () => {
  return (
    <PageScaffold backgroundColor="#f6f8fa">
      <ScreenScaffold background="#ff6000" height={200} layout="center">
        <Text fontSize={32} fontWeight="bold">
          Flutter-UI
        </Text>
        <Text>A Flutter-like UI-kit written by React</Text>
      </ScreenScaffold>

      <ScreenScaffold contrastingColor="#333" data-screen="Bases">
        <Container padding="24px 48px" background="#fff">
          <Space box="flex" direction="vertical" size={24}>
            <CodeSample title="Container">
              <Container
                borderRadius={4}
                padding={15}
                width={200}
                height={100}
                background="gray"
                contrastingColor="#f1f1f1"
              >
                Container
              </Container>
            </CodeSample>
            <CodeSample title="Text">
              <Text color="#ff0000" fontWeight="bold" fontSize={20}>
                Text
              </Text>
            </CodeSample>
            <CodeSample title="Img">
              <Img
                width={400}
                src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
              />
            </CodeSample>
            <CodeSample title="Flex">
              <Flex className="test-flex" justify="space-between">
                <SampleBox>1</SampleBox>
                <SampleBox>2</SampleBox>
                <SampleBox>3</SampleBox>
              </Flex>
            </CodeSample>
            <CodeSample title="Space">
              <Space size={10}>
                <SampleBox>1</SampleBox>
                <SampleBox>2</SampleBox>
                <SampleBox>3</SampleBox>
                <SampleBox>4</SampleBox>
              </Space>
            </CodeSample>
          </Space>
        </Container>
      </ScreenScaffold>

      <Section title="RS">
        <div>
          <>Container/Text/Image/Space/Content/Flex</>
        </div>
      </Section>

      <Section title="Extends">
        <div>
          <>Content</>
          <p>内容容器</p>
        </div>
      </Section>

      <Section title="Scaffolds">
        <div>
          <div>
            <>PageScaffold</>
          </div>
        </div>
      </Section>

      <Section title="Theme and Colors">
        <div>
          <p>export * from './Colors'</p>
          <p>export * from './ThemeData'</p>
          <p>export * from './TextThemeData'</p>
        </div>
      </Section>
      <Section title="Utils">
        <div>
          <>renderComponent/StopPropagation</>
        </div>
      </Section>
    </PageScaffold>
  )
}

ReactDOM.render(<Test></Test>, document.getElementById('root'))
