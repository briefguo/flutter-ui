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
import { ScreenDebug } from '../debug/ScreenDebug'

export interface SingleContainerProps extends BaseComponentProps {
  contrastingColor?: string
  background?: string
  padding?: string | number
  margin?: string | number
  height?: string | number
  width?: number | string
  borderRadius?: string | number
  border?: string
  // TODO:
  cursor?: string
  textAlign?: Property.TextAlign
}

export const SingleContainer: React.FC<SingleContainerProps> = p => {
  const {
    contrastingColor,
    background,
    padding,
    margin,
    height,
    width,
    borderRadius,
    border,
    cursor,
    textAlign,
    lg,
    xs,
    ...otherProps
  } = p

  return (
    <CSSStyleInjector
      classNamePrefix="single-container"
      style={{
        color: contrastingColor,
        background: background,
        padding: padding,
        margin: margin,
        height: height,
        width: width,
        borderRadius: borderRadius,
        border: border,
        cursor: cursor,
        textAlign: textAlign,
      }}
    >
      {currentClassName => (
        <div
          {...otherProps}
          className={cx(currentClassName, p.className, { lg, xs })}
        >
          <ScreenDebug data-screen={p['data-screen']} />
          {p.children}
        </div>
      )}
    </CSSStyleInjector>
  )
}

export interface ResponsiveContainerProps extends BaseRSComponentProps {
  contrastingColor?: RSProperty<string>
  background?: RSProperty<string>
  padding?: RSProperty<string | number>
  margin?: RSProperty<string | number>
  height?: RSProperty<string | number>
  width?: RSProperty<number | string>
  borderRadius?: RSProperty<string | number>
  border?: RSProperty<string>
  cursor?: RSProperty<string>
  textAlign?: RSProperty<Property.TextAlign>
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = createRSC(
  SingleContainer,
)

export const Container = SingleContainer
export const SizedBox = SingleContainer
