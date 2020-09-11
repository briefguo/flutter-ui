import React from 'react'
import { Property } from 'csstype'

interface TextProps {
  children?: any
  color?: string

  fontWeight?: Property.FontWeight
  fontSize?: string | number
  textAlign?: Property.TextAlign
  whiteSpace?: Property.WhiteSpace
  onClick?: any
  maxWidth?: string | number
  cursor?: Property.Cursor

  className?: string
  style?: React.CSSProperties
}

export const Text = (props: TextProps) => {
  const { className, children, color, onClick, style, ...styles } = props
  return (
    <span
      className={className}
      style={{
        color,
        ...styles,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </span>
  )
}
