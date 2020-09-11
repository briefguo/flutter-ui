# Flutter-ui

## Get Started

```shell
npm install flutter-ui@git+https://github.com/briefguo/flutter-ui.git
# use yarn
yarn add flutter-ui@git+https://github.com/briefguo/flutter-ui.git

# 安装peerDeps
npm install react react-dom styled-components
yarn add react react-dom styled-components
```

## Example

### Basic Useage

```tsx
import React from 'react'
import { PageScaffold, Text, Center } from 'flutter-ui'

const IndexPage: Page = () => (
  <PageScaffold
    backgroundColor="#f6f7f8"
    child={
      <Center>
        <Text fontSize={36}>Hello Flutter-UI</Text>
      </Center>
    }
  />
)

IndexPage.title = '首页'

export default IndexPage
```

### Theme

```tsx
import React from 'react'
import { IRouteComponentProps } from 'umi'
import { ThemeProvider } from 'styled-components'
import { TextThemeData, ThemeData } from 'flutter-ui'

const theme = ThemeData.defaultTheme.copyWith({
  bodyBackground: '#fff',
  textTheme: TextThemeData.defaultTextTheme.copyWith({
    body: TextThemeData.default.copyWith({
      background: 'red',
    }),
  }),
})

const Layout: React.FC<IRouteComponentProps> = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Layout
```
