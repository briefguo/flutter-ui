import React from 'react'

interface PageScaffoldProps {
  child?: React.ReactChild
  children?: React.ReactNode
  className?: string
  backgroundColor?: string
  contrastingColor?: string
}

export const PageScaffold = (props: PageScaffoldProps) => {
  return (
    <>
      <style>{`body { background: ${props.backgroundColor}; color: ${props.contrastingColor}; }`}</style>
      <main className={props.className}>{props.child || props.children}</main>
    </>
  )
}
