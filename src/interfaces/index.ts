export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
// 互斥类型 https://zhuanlan.zhihu.com/p/82459341
export type XOR<T, U> = T | U extends Record<string, unknown>
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U

export type ProperRSProperty<T> = Partial<Record<'lg' | 'xs', T>>
export type RSProperty<T> = T | ProperRSProperty<T>
export type ValueOf<T> = T[keyof T]

export type SingleProps<T> = BaseComponentProps & { [P in keyof T]?: T[P] }

export type RSProps<T> = { [P in keyof T]?: RSProperty<T[P]> } & {
  'lg'?: boolean
  'xs'?: boolean
  'className'?: string
  'data-screen'?: string
  'children'?: React.ReactNode
}

export interface BaseComponentProps {
  'lg'?: boolean
  'xs'?: boolean
  'data-screen'?: string
  'style'?: React.CSSProperties
  'className'?: string
  'children'?: React.ReactNode
}
