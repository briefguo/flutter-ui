import React from 'react'
import { Property } from 'csstype'
import { renderChildren } from './renderChildren'
import { Desktop, Mobile } from './Device'
import { theme } from './deafultTheme'

export interface ContainerProps {
  id?: string
  child?: any
  onClick?: any
  children?: React.ReactNode[]
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
  className?: string
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

interface SizedBoxProps {
  width?: number
  height?: number
}

export const SizedBox = (props: SizedBoxProps) => {
  return <Container width={props.width} height={props.height}></Container>
}

export interface ContentContainerProps {
  className?: string
  width?: number | string
}

export const ContentContainer: React.SFC<ContentContainerProps> = props => (
  <>
    <Desktop>
      <Container
        className={props.className}
        width={props.width ?? theme.contentContainerWidth}
        margin="0 auto"
        child={props.children}
      />
    </Desktop>
    <Mobile>
      <Container
        className={props.className}
        margin="0 12px"
        child={props.children}
      ></Container>
    </Mobile>
  </>
)
