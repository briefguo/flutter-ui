import React from 'react'
import Portal from 'react-overlays/Portal'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ color: string; background: string }>`
  color:${props => props.color};
  background:${props => props.background};
`

interface PageScaffoldProps {
  child?: React.ReactChild
  className?: string
  children?: React.ReactChild[]
  portal?: React.ReactElement
  backgroundColor?: string
  contrastingColor?: string
  loading?: boolean
}

export const PageScaffold = (props: PageScaffoldProps) => {
  let portalContainer
  if (typeof window !== 'undefined') {
    portalContainer = document.createElement('div')
    document.body.appendChild(portalContainer)
  }

  if (props.loading ?? false) {
    return <>page loading...</>
  }

  return (
    <>
      <GlobalStyle
        color={props.contrastingColor}
        background={props.backgroundColor}
      />
      <main className={props.className}>{props.child || props.children}</main>
      {props.portal && (
        <Portal container={portalContainer}>{props.portal}</Portal>
      )}
    </>
  )
}
