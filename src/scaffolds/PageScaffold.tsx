import React from 'react'
import { StyleInjector } from '../bases/StyleInjector'

interface PageScaffoldProps {
  child?: React.ReactChild
  children?: React.ReactNode
  className?: string
  backgroundColor?: string
  contrastingColor?: string
}

export const PageScaffold = (props: PageScaffoldProps) => {
  StyleInjector.useStyle(`body`, {
    background: props.backgroundColor,
    color: props.contrastingColor,
  })

  return (
    <main className={props.className}>{props.child ?? props.children}</main>
  )
}
