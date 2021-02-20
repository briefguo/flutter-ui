import React from 'react'
import cx from 'classnames'
import { Property } from 'csstype'
import { BaseComponentProps, RSProperty } from '../interfaces'
import { createRSC } from '../helpers/createRSC'
import { LayoutProps, SingleLayout } from './Layout'
import { CSSStyleInjector } from '../helpers/CSSStyleInjector'

export interface SingleFlexProps extends BaseComponentProps {
  align?: Property.AlignItems
  justify?: Property.JustifyContent
  wrap?: Property.FlexWrap
  expanded?: boolean
  inline?: boolean
  direction?: Property.FlexDirection
  //
  layout?: LayoutProps
}

export const SingleFlex = (p: SingleFlexProps) => {
  return (
    <CSSStyleInjector
      classNamePrefix="single-flex"
      style={{
        display: p.inline ? 'inline-flex' : 'flex',
        justifyContent: p.justify,
        flexWrap: p.wrap,
        height: p.expanded ? '100%' : undefined,
        flex: p.expanded ? '1 1 auto' : undefined,
        flexDirection: p.direction,
        alignItems: p.align,
        ...SingleLayout.mapLayoutPropsToFlexProps(p.layout),
        ...p.style,
      }}
    >
      {className => (
        <div className={cx(className, p.className, { lg: p.lg, xs: p.xs })}>
          {p.children}
        </div>
      )}
    </CSSStyleInjector>
  )
}

export const SingleColumn: React.FC<SingleFlexProps> = props => {
  return (
    <SingleFlex direction="column" {...props}>
      {props.children}
    </SingleFlex>
  )
}

export const SingleCenter: React.FC<SingleFlexProps> = props => {
  return (
    <SingleColumn layout="center" {...props}>
      {props.children}
    </SingleColumn>
  )
}

export const Center = SingleCenter

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

export const ResponsiveFlex: React.FC<ResponsiveFlexProps> = createRSC(
  SingleFlex,
)

export const Flex = SingleFlex
