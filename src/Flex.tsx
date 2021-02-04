import React from 'react'
import { Property } from 'csstype'

import { pickProps } from './_rsUtil'
import { RSProperty } from './_interfaces'
import { ResponsiveContainer, SingleContainer } from './Container'

const propsKeys = [
  'align',
  'gutter',
  'justify',
  'wrap',
  'expanded',
  'inline',
  'direction',
  'layout',
  'style',
]

const mapPropsToStyle = (p: SingleFlexProps) => ({
  display: p.inline ? 'inline-flex' : 'flex',
  alignItems: p.align,
  justifyContent: p.justify,
  flexWrap: p.wrap,
  height: p.expanded ? '100%' : undefined,
  flex: p.expanded ? '1 1 auto' : undefined,
  flexDirection: p.direction,
  ...p.style,
})

export interface SingleFlexProps {
  align?: Property.AlignItems
  gutter?: number
  justify?: Property.JustifyContent
  wrap?: Property.FlexWrap
  expanded?: boolean
  inline?: boolean
  direction?: Property.FlexDirection
  className?: string
  style?: React.CSSProperties

  layout?: LayoutProps
}

export const SingleFlex: React.FC<SingleFlexProps> = props => {
  return (
    <SingleContainer
      className={props.className}
      style={mapPropsToStyle({
        ...props,
        ...mapLayoutPropsToFlexProps(props.layout),
      })}
    >
      {props.children}
    </SingleContainer>
  )
}
export const Flex = SingleFlex
export const SingleColumn: React.FC<SingleFlexProps> = props => {
  return (
    <SingleFlex direction="column" {...props}>
      {props.children}
    </SingleFlex>
  )
}

export const SingleCenter: React.FC<SingleFlexProps> = props => {
  return (
    <SingleColumn
      align="center"
      justify="center"
      {...props}
      style={{ textAlign: 'center', ...props.style }}
    >
      {props.children}
    </SingleColumn>
  )
}
export const Center = SingleFlex
const layouts: Record<
  | 'center'
  | 'leftCenter'
  | 'leftBottom'
  | 'rightCenter'
  | 'rightBottom'
  | 'rightTop'
  | 'leftTop',
  SingleFlexProps
> = {
  // TODO:
  center: {
    justify: 'center',
    expanded: true,
    style: {
      textAlign: 'center',
    },
  },
  leftBottom: {
    direction: 'column',
    justify: 'flex-end',
    expanded: true,
  },
  rightTop: {
    direction: 'column',
    align: 'flex-end',
    expanded: true,
  },
  rightBottom: {
    direction: 'column',
    justify: 'flex-end',
    align: 'flex-end',
    expanded: true,
  },
  leftTop: {
    direction: 'column',
    align: 'flex-start',
    expanded: true,
  },
  leftCenter: {
    direction: 'column',
    expanded: true,
    justify: 'center',
  },
  rightCenter: {
    direction: 'column',
    expanded: true,
    justify: 'center',
    align: 'flex-end',
  },
}

export type LayoutProps = keyof typeof layouts | ResponsiveFlexProps

export const mapLayoutPropsToFlexProps = (layout?: LayoutProps) => {
  let layoutProps: SingleFlexProps
  if (Object.keys(layouts).includes(layout as any)) {
    layoutProps = layouts[layout as keyof typeof layouts]
  } else {
    layoutProps = layout as SingleFlexProps
  }
  return layoutProps
}

export interface ResponsiveFlexProps {
  align?: RSProperty<Property.AlignItems>
  justify?: RSProperty<Property.JustifyContent>
  wrap?: RSProperty<Property.FlexWrap>
  expanded?: RSProperty<boolean>
  inline?: RSProperty<boolean>
  direction?: RSProperty<Property.FlexDirection>
  className?: RSProperty<string>
  style?: RSProperty<React.CSSProperties>
  layout?: RSProperty<LayoutProps>
}

export const ResponsiveFlex: React.FC<ResponsiveFlexProps> = props => {
  const lgFlexProps = pickProps(props, propsKeys, 'lg')
  const xsFlexProps = pickProps(props, propsKeys, 'xs')
  return (
    <ResponsiveContainer
      style={{
        lg: mapPropsToStyle({
          ...mapLayoutPropsToFlexProps(lgFlexProps.layout),
          ...lgFlexProps,
        }),
        xs: mapPropsToStyle({
          ...mapLayoutPropsToFlexProps(xsFlexProps.layout),
          ...xsFlexProps,
        }),
      }}
    >
      {props.children}
    </ResponsiveContainer>
  )
}
