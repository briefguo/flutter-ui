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
