import React from 'react'
import { Property } from 'csstype'
import { renderChildren } from './renderChildren'

export interface ContainerProps {
  id?: string
  child?: any
  onClick?: any
  children?: any

  className?: string

  backgroundColor?: string
  background?: string
  backgroundPosition?: string
  backgroundSize?: string
  backgroundImage?: string
  borderRadius?: string | number
  contrastingColor?: string
  padding?: string | number
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
  borderTop?: string
  borderBottom?: string
  textAlign?: Property.TextAlign
  fontSize?: string | number
  height?: number
  width?: number | string
  flex?: boolean
  expanded?: boolean
  visible?: boolean
  cursor?: string
  margin?: string
  marginTop?: number
  border?: string
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  overflow?: Property.Overflow
  position?: Property.Position
}

export const Container = (props: ContainerProps) => {
  const {
    contrastingColor,
    flex,
    id,
    expanded,
    child,
    children,
    visible = true,
    className,
    onClick,
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
        display: flex ? 'flex' : undefined,
        flex: expanded ? '1 1' : undefined,
        color: contrastingColor,
      }}
    >
      {renderChildren(child || children)}
    </div>
  )
}
