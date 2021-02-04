import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

export interface PageScaffoldProps {
  child?: React.ReactChild
  children?: React.ReactNode
  className?: string
  portal?: React.ReactElement
  backgroundColor?: string
  contrastingColor?: string
}

export const PageScaffold = (props: PageScaffoldProps) => {
  useEffect(() => {
    if (props.portal) {
      const portalContainer = document.createElement('div')
      document.body.appendChild(portalContainer)
      ReactDOM.render(props.portal, portalContainer)
    }
  }, [props.portal])

  return (
    <>
      <style>{`body { background: ${props.backgroundColor}; color: ${props.contrastingColor}; }`}</style>
      <main className={props.className}>{props.child || props.children}</main>
    </>
  )
}
