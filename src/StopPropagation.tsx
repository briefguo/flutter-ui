import React from 'react'

export const StopPropagation = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
) => {
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
