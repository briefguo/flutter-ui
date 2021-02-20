import React from 'react'
import cx from 'classnames'
import { Property } from 'csstype'
import {
  BaseComponentProps,
  BaseRSComponentProps,
  RSProperty,
} from '../interfaces'
import { CSSStyleInjector } from '../helpers/CSSStyleInjector'
import { createRSC } from '../helpers/createRSC'

const layouts: Record<
  | 'center'
  | 'leftCenter'
  | 'leftBottom'
  | 'rightCenter'
  | 'rightBottom'
  | 'rightTop'
  | 'leftTop',
  React.CSSProperties
> = {
  center: {
    justifyContent: 'center',
    flex: '1 1 auto',
    height: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  leftBottom: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '100%',
    flex: '1 1 auto',
  },
  rightTop: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: '1 1 auto',
  },
  rightBottom: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: '1 1 auto',
    height: '100%',
  },
  leftTop: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: '1 1 auto',
  },
  leftCenter: {
    flexDirection: 'column',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightCenter: {
    flexDirection: 'column',
    flex: '1 1 auto',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
}

export type LayoutProps = keyof typeof layouts

const _mapLayoutPropsToFlexProps = (layout?: LayoutProps) => {
  let layoutProps: React.CSSProperties
  if (Object.keys(layouts).includes(layout as any)) {
    layoutProps = layouts[layout as keyof typeof layouts]
  } else {
    layoutProps = layout as React.CSSProperties
  }
  return layoutProps
}

export interface SingleLayoutProps extends BaseComponentProps {
  inline?: boolean
  wrap?: Property.FlexWrap
  alignment?: LayoutProps
}

export const SingleLayout = (p: SingleLayoutProps) => {
  const { inline, wrap, alignment, ...props } = p
  return (
    <CSSStyleInjector
      classNamePrefix="single-layout"
      style={{
        display: inline ? 'inline-flex' : 'flex',
        ..._mapLayoutPropsToFlexProps(alignment),
        flexWrap: wrap,
      }}
    >
      {currentClassName => (
        <div {...props} className={cx(props.className, currentClassName)}>
          {props.children}
        </div>
      )}
    </CSSStyleInjector>
  )
}

SingleLayout.mapLayoutPropsToFlexProps = _mapLayoutPropsToFlexProps

export interface RSLayoutProps extends BaseRSComponentProps {
  inline?: RSProperty<boolean>
  wrap?: RSProperty<Property.FlexWrap>
  alignment?: RSProperty<LayoutProps>
}

export const RSLayout: React.FC<RSLayoutProps> = createRSC(SingleLayout)

export const Layout = SingleLayout
