import React from 'react'
import cx from 'classnames'
import { Property } from 'csstype'
import { BaseComponentProps, RSProperty } from '../interfaces'
import { createRSC } from '../helpers/createRSC'
import { CSSStyleInjector } from '../helpers/CSSStyleInjector'

export interface SpaceProps extends BaseComponentProps {
  direction?: 'vertical' | 'horizen'
  box?: 'inline-flex' | 'flex'
  children: React.ReactElement[]
  align?: Property.AlignItems
  gutter?: number
}

export function SingleSpace(p: SpaceProps) {
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
  // https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap
  const {
    direction = 'horizen',
    box = 'inline-flex',
    align,
    gutter,
    ...props
  } = p

  switch (direction) {
    case 'vertical':
      return (
        <CSSStyleInjector
          classNamePrefix="single-space"
          style={{
            display: box,
            flexDirection: 'column',
            alignItems: align,
            marginTop: -gutter / 2,
            marginBottom: -gutter / 2,
          }}
        >
          {className => (
            <div
              {...props}
              className={cx(props.className, className, `is-${direction}`)}
            >
              {props.children.map((child, index) => (
                <CSSStyleInjector
                  key={index}
                  classNamePrefix="single-space__item"
                  style={{ marginTop: gutter / 2, marginBottom: gutter / 2 }}
                >
                  {className => <div className={cx(className)}>{child}</div>}
                </CSSStyleInjector>
              ))}
            </div>
          )}
        </CSSStyleInjector>
      )
    case 'horizen':
    default:
      return (
        <CSSStyleInjector
          classNamePrefix="single-space"
          style={{
            display: box,
            alignItems: align,
            marginLeft: -gutter / 2,
            marginRight: -gutter / 2,
          }}
        >
          {className => (
            <div
              {...props}
              className={cx(props.className, className, `is-${direction}`)}
            >
              {props.children.map((child, index) => (
                <CSSStyleInjector
                  key={index}
                  classNamePrefix="single-space__item"
                  style={{
                    flex: box === 'flex' ? '1 1' : undefined,
                    marginLeft: gutter / 2,
                    marginRight: gutter / 2,
                  }}
                >
                  {className => <div className={cx(className)}>{child}</div>}
                </CSSStyleInjector>
              ))}
            </div>
          )}
        </CSSStyleInjector>
      )
  }
}

export interface RSSpaceProps {
  direction?: RSProperty<'vertical' | 'horizen'>
  align?: RSProperty<Property.AlignItems>
  gutter?: RSProperty<number>
  className?: RSProperty<string>
  style?: RSProperty<React.CSSProperties>
  children: React.ReactChild[]
  box?: 'inline-flex' | 'flex'
}

export const ResponsiveSpace: React.FC<RSSpaceProps> = createRSC(SingleSpace)

export const Space = ResponsiveSpace
