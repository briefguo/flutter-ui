import React from 'react'
import cx from 'classnames'
import { Property } from 'csstype'

import { RSProperty } from './_interfaces'
import { pickProps } from './_rsUtil'
import { useDevices } from './Device'
export interface SingleTextProps {
  fontSize?: number | string
  color?: string
  lg?: boolean
  xs?: boolean
  fontWeight?: Property.FontWeight
  textAlign?: Property.TextAlign
  className?: string
  style?: React.CSSProperties
}

const propsKeys = [
  'fontSize',
  'fontWeight',
  'textAlign',
  'color',
  'className',
  'style',
]

const mapPropsToStyle = (p: SingleTextProps) => ({
  fontSize: p.fontSize,
  color: p.color,
  textAlign: p.textAlign,
  fontWeight: p.fontWeight,
  ...p.style,
})

export const SingleText: React.FC<SingleTextProps> = props => {
  return (
    <span
      style={mapPropsToStyle(props)}
      className={cx(props.className, 'single-text', {
        lg: props.lg,
        xs: props.xs,
      })}
    >
      {props.children}
    </span>
  )
}

export const Text = SingleText

export interface ResponsiveTextProps {
  fontSize?: RSProperty<number | string>
  color?: RSProperty<string>
  textAlign?: RSProperty<Property.TextAlign>
  fontWeight?: RSProperty<Property.FontWeight>
  className?: RSProperty<string>
  style?: RSProperty<React.CSSProperties>
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = props => {
  const lgProps = pickProps(props, propsKeys, 'lg')
  const xsProps = pickProps(props, propsKeys, 'xs')

  // TODO: 待优化实现
  const { isDefault, isMobile } = useDevices()
  return (
    <>
      {isDefault && (
        <SingleText lg {...lgProps}>
          {props.children}
        </SingleText>
      )}
      {isMobile && (
        <SingleText xs {...xsProps}>
          {props.children}
        </SingleText>
      )}
    </>
  )
}
