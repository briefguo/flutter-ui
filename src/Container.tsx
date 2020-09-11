import React from 'react'
import styled from 'styled-components'

export interface ContainerProps {
  id?: string

  visible?: boolean

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

export const Container = styled.div<ContainerProps>`
  cursor: ${props => (props.onClick ? 'pointer' : props.cursor)};
  color: ${props => props.contrastingColor ?? props.color};
  background: ${props => props.background};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  height: ${props => props.height};
  width: ${props => props.width};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  display: ${props => (props.visible ? 'inherit' : 'none')};
`
