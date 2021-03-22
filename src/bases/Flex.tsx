import { Property } from 'csstype'
import { LayoutAlignment, mapLayoutPropsToCSS } from './Layout'
import { Style, RSCProps } from '../helpers/createRSC'
import { RSProps } from '../interfaces'
import React from 'react'
import { createOf } from '../helpers/createOf'

export class FlexProps extends RSCProps {
  @Style.As('alignItems')
  align?: Property.AlignItems

  @Style.As('justifyContent')
  justify?: Property.JustifyContent

  @Style.As('flexWrap')
  wrap?: Property.FlexWrap

  @Style.Calc(expanded => ({
    height: expanded ? '100%' : undefined,
    flex: expanded ? '1 1 auto' : undefined,
  }))
  expanded?: boolean

  @Style.Calc(inline => ({ display: inline ? 'inline-flex' : 'flex' }))
  inline?: boolean

  @Style.As('flexDirection')
  direction?: Property.FlexDirection

  @Style.Calc(mapLayoutPropsToCSS)
  layout?: LayoutAlignment
}

export const Flex = (p: RSProps<FlexProps>) =>
  React.createElement('div', FlexProps.of(p))

Flex.of = createOf(Flex)
