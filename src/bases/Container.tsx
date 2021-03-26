import { Property } from 'csstype'
import React from 'react'
import { createOf } from '../helpers/createOf'
import { Style, RSCProps } from '../helpers/createRSC'
import { RSProps } from '../interfaces'

export class ContainerProps extends RSCProps {
  @Style.As('color')
  contrastingColor?: string

  background?: string
  padding?: string | number
  margin?: string | number
  height?: string | number
  width?: number | string
  borderRadius?: string | number
  border?: string
  cursor?: string
  textAlign?: Property.TextAlign

  boxShadow?: string

  columnCount?: number
  columnGap?: number
}

export const Container = (p: RSProps<ContainerProps>) =>
  React.createElement('div', ContainerProps.of(p))

Container.of = createOf(Container)
