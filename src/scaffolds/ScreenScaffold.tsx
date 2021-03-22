import React from 'react'
import { ContainerProps } from '../bases/Container'
import { LayoutAlignment } from '../bases/Layout'
import { RS } from '../extends/RS'
import { RSProps, XOR } from '../interfaces'

type BaseScreenScaffoldProps = {
  layout?: LayoutAlignment
  content?: React.ReactChild
  child?: React.ReactChild
  style?: React.CSSProperties
}

export type ScreenScaffoldProps = RSProps<
  ContainerProps & BaseScreenScaffoldProps
> &
  XOR<RSProps<{ src: string }>, RSProps<{ background: string }>>

export const ScreenScaffold = (props: ScreenScaffoldProps) => {
  const { content, layout, child, ...bgProps } = props
  return (
    <RS.Background {...bgProps}>
      <RS.Content height="100%">
        <RS.Layout alignment={layout}>
          {content ?? child ?? props.children}
        </RS.Layout>
      </RS.Content>
    </RS.Background>
  )
}

export const BgScaffold = (props: ScreenScaffoldProps) => {
  const { content, layout, child, ...bgProps } = props
  return (
    <RS.Background {...bgProps}>
      <RS.Layout alignment={layout}>
        {content ?? child ?? props.children}
      </RS.Layout>
    </RS.Background>
  )
}
