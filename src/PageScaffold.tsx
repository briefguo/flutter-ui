import React from 'react'
import Portal from 'react-overlays/Portal'
import { GlobalStyle } from './defaultTheme'

const isServer = typeof window === 'undefined'

interface PageScaffoldProps {
  child?: React.ReactChild
  className?: string
  children?: React.ReactChild[]
  footer?: React.ReactChild
  modal?: React.ReactChild
  portal?: React.ReactElement
  backgroundColor?: string
  contrastingColor?: string
  loading?: boolean
}

export const PageScaffold = (props: PageScaffoldProps) => {
  // const theme = useTheme()
  let bodyChild
  if (!isServer) {
    bodyChild = document.createElement('div')
    document.body.appendChild(bodyChild)
  }

  if (props.loading) {
    return <>loading...</>
  }
  const contrastingColor = props.contrastingColor
  const backgroundColor = props.backgroundColor
  return (
    <>
      <div className={props.className}>{props.child || props.children}</div>
      {props.portal && <Portal container={bodyChild}>{props.portal}</Portal>}
      {props.footer}
      {props.modal}
      <GlobalStyle
        contrastingColor={contrastingColor}
        backgroundColor={backgroundColor}
      />
    </>
  )
}
