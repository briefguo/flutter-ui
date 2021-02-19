import React from 'react'
import ReactDOM from 'react-dom'
import {
  Container,
  Flex,
  PageScaffold,
  RS,
  Img,
  Space,
  Text,
  Center,
  Background,
  Content,
  Layout,
} from '../src'

const SampleBox: React.FC = props => {
  return (
    <Container background="gray" padding={10} contrastingColor="#fff">
      {props.children}
    </Container>
  )
}

const SampleGroup: React.FC<{ children: React.ReactElement[] }> = props => {
  return (
    <Space box="flex" direction="vertical" gutter={12}>
      {props.children}
    </Space>
  )
}

const CodeSample: React.FC<{ title?: string }> = props => {
  return (
    <>
      <Space box="flex" direction="vertical" gutter={5}>
        <h5>{props.title}</h5>
        <div>{props.children}</div>
      </Space>
    </>
  )
}

const Section: React.FC<{ title?: string }> = props => {
  return (
    <>
      <Container data-screen={props.title}>
        <h2>{props.title}</h2>
        <div>{props.children}</div>
      </Container>
    </>
  )
}

const Test = () => {
  return (
    <PageScaffold backgroundColor="#f1f2f3" contrastingColor="#333">
      <style scoped>{`h4,h5{margin:0;}`}</style>
      <RS.Content>
        <Section title="基本用法">
          <Space className="hello" box="flex" gutter={24}>
            <CodeSample title="Container">
              <Container padding={10} background="gray" contrastingColor="#fff">
                1
              </Container>
            </CodeSample>
            <CodeSample title="Text">
              <Text contrastingColor="#fff" style={{ background: 'gray' }}>
                1
              </Text>
            </CodeSample>
          </Space>

          <Space box="flex" gutter={24}>
            <CodeSample title="Img">
              <Img src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg" />
            </CodeSample>
            <CodeSample title="Flex">
              <Flex justify="space-between">
                <SampleBox>1</SampleBox>
                <SampleBox>2</SampleBox>
                <SampleBox>3</SampleBox>
              </Flex>
            </CodeSample>
            <CodeSample title="Space">
              <Space gutter={10}>
                <SampleBox>1</SampleBox>
                <SampleBox>2</SampleBox>
                <SampleBox>3</SampleBox>
                <SampleBox>4</SampleBox>
              </Space>
            </CodeSample>
          </Space>

          <Section title="组合用法">
            <h3>Layout</h3>
            <p>Layout组件会充满父级元素，并按照alignment指定的位置来布局</p>
            <Space box="flex" direction="vertical" gutter={24}>
              <Space box="flex" gutter={24}>
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
              <Space box="flex" gutter={24}>
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
            <h3>Space</h3>
            <Space box="flex" gutter={24}>
              <SampleGroup>
                <h4>垂直</h4>
                <CodeSample title="行内">
                  <Space direction="vertical" gutter={10}>
                    <SampleBox>1</SampleBox>
                    <SampleBox>2</SampleBox>
                    <SampleBox>3</SampleBox>
                    <SampleBox>4</SampleBox>
                  </Space>
                </CodeSample>
                <CodeSample title="块">
                  <Space box="flex" direction="vertical" gutter={10}>
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
                  <Space direction="horizen" gutter={24} align="center">
                    <SampleBox>1</SampleBox>
                    <SampleBox>2</SampleBox>
                    <SampleBox>3</SampleBox>
                    <SampleBox>4</SampleBox>
                  </Space>
                </CodeSample>
                <CodeSample title="块">
                  <Space
                    box="flex"
                    direction="horizen"
                    gutter={24}
                    align="flex-end"
                  >
                    <SampleBox>1</SampleBox>
                    <SampleBox>2</SampleBox>
                    <SampleBox>3</SampleBox>
                    <SampleBox>4</SampleBox>
                  </Space>
                </CodeSample>
              </SampleGroup>
            </Space>
          </Section>
        </Section>
        <Section title="扩展组件">
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
          </div>
          <div>
            <h3>Content</h3>
            <p>内容容器</p>
            <Content background="red" contrastingColor="#fff" padding={10}>
              内容宽度
            </Content>
          </div>
        </Section>
        <div>
          <h2>Scaffolds</h2>
          <div>
            <h3>PageScaffold</h3>
          </div>
          <h2>RS</h2>
          <div>
            <h3>Container/Text/Image/Space/Content/Flex</h3>
          </div>
          <h2>Theme and Colors</h2>
          <div>
            <p>export * from './Colors'</p>
            <p>export * from './ThemeData'</p>
            <p>export * from './TextThemeData'</p>
          </div>
          <h2>utils</h2>
          <div>
            <h3>renderComponent/StopPropagation</h3>
          </div>
          <h2>Media Query And Responsive Component</h2>
          <div>
            <code>TODO: 此处暂不支持SSR，待进一步优化，不推荐广泛使用</code>
            <p>export * from './_deprecated_deviceUtil' </p>
            <p>export * from './RS'</p>
            <RS.Space
              direction={{ lg: 'horizen', xs: 'vertical' }}
              gutter={{ lg: 100, xs: 10 }}
            >
              <SampleBox>1</SampleBox>
              <SampleBox>2</SampleBox>
            </RS.Space>
          </div>
        </div>
      </RS.Content>
    </PageScaffold>
  )
}

ReactDOM.render(<Test></Test>, document.getElementById('root'))
