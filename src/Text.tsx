import React from 'react'
import { Property } from 'csstype'
import { textTheme, colors } from './deafultTheme'
import { renderChildren } from './renderChildren'

interface TextProps {
  children?: any
  type?: keyof typeof textTheme
  colorType?: keyof typeof colors
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
  const {
    className,
    children,
    type: theme,
    colorType,
    color,
    onClick,
    style,
    ...styles
  } = props
  const currentTextTheme = textTheme[theme || 'default'] as React.CSSProperties
  const colorTheme = colorType ? colors[colorType] : undefined
  return (
    <span
      className={className}
      style={{
        ...currentTextTheme,
        ...styles,
        color: color || colorTheme || currentTextTheme?.color,
        ...style,
      }}
      onClick={onClick}
    >
      {renderChildren(children)}
    </span>
  )
}
