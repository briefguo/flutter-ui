import { createGlobalStyle } from 'styled-components'

export const colors = {
  alipay: '#108ee9',
  primary: '#ff6700',
  secondary: 'rgba(0,0,0,0.45)',
  descriptionColor: '#888',
  wechat: '#08C160',
  success: '#00B23F',
  white: '#fff',
  fail: '#ff3838',
}

export type Colors = typeof colors

export const theme = {
  borderRadius: '5px',
  defaultBodyBackground: '#F5F5F9',
  defaultContrastingColor: '#333',
  colors,
}

export type CustomTheme = typeof theme

export const textTheme = {
  middle: { fontSize: 24 },
  title: { fontSize: 17 },
  light: { fontSize: 12 },
  description: { fontSize: 12, color: '#888' },
  default: {},
  body: { fontSize: 14 },
}

export interface TextTheme {
  [key: string]: React.CSSProperties
}

export type TextThemeKeys = keyof typeof textTheme

export const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: ${(props: any) =>
      props.contrastingColor || theme.defaultContrastingColor};
    background: ${(props: any) =>
      props.backgroundColor || theme.defaultBodyBackground} !important;
  }
`

// https://www.styled-components.com/docs/tooling#styled-theming
