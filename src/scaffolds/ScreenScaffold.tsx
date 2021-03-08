import React from 'react'
import { SingleContainerProps } from '../bases/Container'
import { LayoutProps } from '../bases/Layout'
import { RS } from '../extends/RS'
import { RSProps } from '../interfaces'

type BaseScreenScaffoldProps = {
  layout?: LayoutProps
  content?: React.ReactChild
  child?: React.ReactChild
  style?: React.CSSProperties
}

export type ScreenScaffoldProps = RSProps<
  SingleContainerProps & BaseScreenScaffoldProps
>

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
