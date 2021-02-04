# Flutter-ui


## RoadMap

### V2版本

- [ ] 去掉styled-components
- [ ] 去掉react-overlays
- [ ] 引入ResponsiveComponents，写一套DSL生成两端的代码
  - [x] 开发完成
  - [ ] 整理
- [ ] 兼容SSR

## Get Started

### Installation

```shell
npm install flutter-ui@git+https://github.com/briefguo/flutter-ui.git
# use yarn
yarn add flutter-ui@git+https://github.com/briefguo/flutter-ui.git

# 安装peerDeps
npm install react react-dom styled-components
yarn add react react-dom styled-components
```

## Examples

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

## Documentation

- [base](https://github.com/briefguo/flutter-ui#base)
- [theme and colors](https://github.com/briefguo/flutter-ui#theme-and-colors)
- [scaffold](https://github.com/briefguo/flutter-ui#scaffold)
- [layout and gutter](https://github.com/briefguo/flutter-ui#layout-and-gutter)
- [utils](https://github.com/briefguo/flutter-ui#utils)
- [media query](https://github.com/briefguo/flutter-ui#media-query)

### base

TODO

### theme and colors

TODO

### scaffold

TODO

### layout and gutter

TODO

### utils

TODO

### media query

TODO
