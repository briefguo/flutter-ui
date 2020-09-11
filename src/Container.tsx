import React from 'react'
import { renderChildren } from './renderChildren'

export interface ContainerProps {
  id?: string
  child?: any
  children?: any
  onClick?: any

  visible?: boolean

  className?: string

  contrastingColor?: string
  background?: string
  padding?: string | number
  margin?: string | number
  height?: string | number
  width?: number | string
  borderRadius?: string | number
  border?: string
  cursor?: string

  style?: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
  const {
    contrastingColor,
    id,
    child,
    children,
    visible = true,
    className,
    onClick,
    style,
    ...styles
  } = props
  if (child && children) {
    throw Error('child和children不能同时使用')
  }
  if (!visible) {
    return null
  }
  return (
    <div
      id={id}
      onClick={onClick}
      className={className ?? ''}
      style={{
        ...styles,
        cursor: onClick ? 'pointer' : props.cursor,
        color: contrastingColor,
        ...style,
      }}
    >
      {renderChildren(child || children)}
    </div>
  )
}
