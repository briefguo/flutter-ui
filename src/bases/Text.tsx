import React from 'react'
import cx from 'classnames'
import { Property } from 'csstype'

import {
  BaseComponentProps,
  BaseRSComponentProps,
  RSProperty,
} from '../interfaces'
import { createRSC } from '../helpers/createRSC'
import { CSSStyleInjector } from '../helpers/CSSStyleInjector'

export interface SingleTextProps extends BaseComponentProps {
  fontSize?: number | string
  color?: string
  contrastingColor?: string
  fontWeight?: Property.FontWeight
  textAlign?: Property.TextAlign

  /**
   * @deprecated
   */
  whiteSpace?: Property.WhiteSpace
}

export const SingleText = (p: SingleTextProps) => {
  const {
    fontSize,
    contrastingColor,
    color,
    textAlign,
    whiteSpace,
    fontWeight,
    lg,
    xs,
    ...props
  } = p
  return (
    <CSSStyleInjector
      classNamePrefix="single-text"
      style={{
        fontSize: fontSize,
        color: contrastingColor ?? color,
        textAlign: textAlign,
        whiteSpace: whiteSpace,
        fontWeight: fontWeight,
      }}
    >
      {currentClassName => (
        <span
          {...props}
          className={cx(props.className, currentClassName, { lg, xs })}
        >
          {props.children}
        </span>
      )}
    </CSSStyleInjector>
  )
}

export const Text = SingleText

export interface ResponsiveTextProps extends BaseRSComponentProps {
  fontSize?: RSProperty<number | string>
  color?: RSProperty<string>
  textAlign?: RSProperty<Property.TextAlign>
  fontWeight?: RSProperty<Property.FontWeight>
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = createRSC(
  SingleText,
)
