# Flutter-ui

## RoadMap

### V2版本

- [ ] 新特性
  - [x] 重写了组件样式生成逻辑，让组件生成的dom变得更加整洁、易于调试
  - [x] 新组件RS。引入ResponsiveComponents，写一套DSL生成两端的代码
  - [x] 新组件Space。
  - [x] 新组件Layout。
  - [x] 新的样式生成逻辑。CSSStyleInjector
  - [ ] 重写的屏幕调试组件
  - [ ] 为组件编写测试用例

- [ ] Break Change
  - [x] 去掉styled-components
  - [x] 去掉react-overlays
  - [ ] 去掉react-responsive
- [ ] 完全兼容SSR
- [ ] 兼容v1，然后发布v2到npm（npm源只有v1，v2版本仅支持git引用，待完全兼容v1后发布v2）


## Get Started

### Installation

#### v2

```shell
npm install flutter-ui@git://github.com/briefguo/flutter-ui.git#2a2c873452823ec15c2fb981cc906c7eb85e0e79
# use yarn
yarn add flutter-ui@git://github.com/briefguo/flutter-ui.git#2a2c873452823ec15c2fb981cc906c7eb85e0e79
```
#### v1

```shell
npm install flutter-ui
# use yarn
yarn add flutter-ui
```


## Examples

### Basic Useage

#### Container/Text

```tsx
import { Container } from 'flutter-ui'

const IndexPage = () => (
  <Container padding={10} background="gray" contrastingColor="#fff">
    <Text fontSize={15}>
      Hello Flutter-UI
    </Text>
  </Container>
)

export default IndexPage
```

#### Flex

```tsx
import { Flex } from 'flutter-ui'

const IndexPage = () => (
  <Flex className="test-flex" justify="space-between">
    <SampleBox>1</SampleBox>
    <SampleBox>2</SampleBox>
    <SampleBox>3</SampleBox>
  </Flex>
)

export default IndexPage
```
#### Background/Layout

```tsx
import { Background, Layout } from 'flutter-ui'

const IndexPage = () => (
  <Background
    src="//pic.cdn.sunmi.com/IMG/16026708266762.jpg"
    height={200}
  >
    <Layout alignment="leftCenter">
      <SampleBox>alignment="default"</SampleBox>
    </Layout>
  </Background>
)

export default IndexPage
```

#### Space

```tsx
import { Space } from 'flutter-ui'

const IndexPage = () => (
  <Space box="flex" direction="vertical" gutter={10}>
    <SampleBox>1</SampleBox>
    <SampleBox>2</SampleBox>
    <SampleBox>3</SampleBox>
    <SampleBox>4</SampleBox>
  </Space>
)

export default IndexPage
```

#### RS

```tsx
import { RS } from 'flutter-ui'

const IndexPage = () => (
  <RS.Content>
    <RS.Container>2</RS.Container>
    <RS.Text>2</RS.Text>
    <RS.Content>2</RS.Content>
    <RS.Background>2</RS.Background>
    <RS.Image>2</RS.Image>
    <RS.Space>1</RS.Space>
  </RS.Content>
)

export default IndexPage
```

#### PageScaffold

```tsx
import { PageScaffold, Text, Center } from 'flutter-ui'

const IndexPage = () => (
  <PageScaffold
    backgroundColor="#f6f7f8"
    child={
      <Center>
        <Text fontSize={36}>Hello Flutter-UI</Text>
      </Center>
    }
  />
)

export default IndexPage
```

### Typescript Support

```tsx
// 添加 styled.d.ts 用于 theme 的自动提示
/// <reference types="styled-components" />

import { ThemeData } from 'flutter-ui'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeData {
    contentContainerWidth: number
  }
}
```

### Advanced

```tsx

const TestPage = () => {
  return (
    <PageScaffold backgroundColor="#f1f2f3" contrastingColor="#333">
      <style scoped>{`h4,h5{margin:0;}`}</style>
      <RS.Content>
        <Section title="基本用法">
          <Space box="flex" gutter={24}>
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
              <Flex className="test-flex" justify="space-between">
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
          支持Styled-Components
          <StyledFlex>
            <SampleBox>1</SampleBox>
            <SampleBox>2</SampleBox>
          </StyledFlex>
        </div>
      </RS.Content>
    </PageScaffold>
  )
}
```