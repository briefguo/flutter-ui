import React from 'react'
import Portal from 'react-overlays/Portal'

import { theme } from './deafultTheme'
import { SizedBox } from './Container'
import { isServer } from './isServer'

interface PageScaffoldProps {
  child?: React.ReactChild
  footer?: React.ReactChild
  modal?: React.ReactChild
  portal?: React.ReactElement
  backgroundColor?: string
  contrastingColor?: string
  loading?: boolean
}

export const PageScaffold = (props: PageScaffoldProps) => {
  let bodyChild
  if (!isServer) {
    bodyChild = document.createElement('div')
    document.body.appendChild(bodyChild)
  }

  if (props.loading) {
    return (
      <>
        <SizedBox height={300}></SizedBox>
        {/* <Center>loading...</Center> */}
        <SizedBox height={300}></SizedBox>
      </>
    )
  }
  const contrastingColor =
    props.contrastingColor || theme.defaultContrastingColor
  const backgroundColor = props.backgroundColor || theme.defaultBodyBackground
  return (
    <>
      {props.child}
      {props.portal && <Portal container={bodyChild}>{props.portal}</Portal>}
      {props.footer}
      {props.modal}
      <style>
        {`
          body {
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            color: ${contrastingColor};
            background: ${backgroundColor} !important;
          }
        `}
      </style>
    </>
  )
}
