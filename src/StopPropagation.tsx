import React from 'react'

type StopPropagationProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

export const StopPropagation = (props: StopPropagationProps) => {
  return (
    <span
      {...props}
      onClick={e => {
        e.stopPropagation()
        props.onClick?.(e)
      }}
    >
      {props.children}
    </span>
  )
}
