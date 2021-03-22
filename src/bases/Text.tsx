import { Property } from 'csstype'
import React from 'react'
import { createOf } from '../helpers/createOf'
import { RSCProps, Style } from '../helpers/createRSC'
import { RSProps } from '../interfaces'

export class TextProps extends RSCProps {
  fontSize?: number | string

  color?: string

  @Style.As('color')
  contrastingColor?: string

  fontWeight?: Property.FontWeight

  textAlign?: Property.TextAlign

  whiteSpace?: Property.WhiteSpace
}

export const Text = (p: RSProps<TextProps>) =>
  React.createElement('span', TextProps.of(p))

Text.of = createOf(Text)
