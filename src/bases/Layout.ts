import React from 'react'
import { singleOf } from '../helpers/createSingle'

export type LayoutAlignment =
  | 'center'
  | 'leftCenter'
  | 'leftBottom'
  | 'rightCenter'
  | 'rightBottom'
  | 'rightTop'

const layouts: Record<LayoutAlignment, React.CSSProperties> = {
  center: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  leftBottom: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  rightTop: {
    alignItems: 'flex-end',
  },
  rightBottom: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  leftCenter: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightCenter: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
}

export type LayoutProps = LayoutAlignment

export const mapLayoutPropsToCSS = (layout?: LayoutProps) => {
  let layoutProps: React.CSSProperties
  if (Object.keys(layouts).includes(layout as any)) {
    layoutProps = layouts[layout as keyof typeof layouts]
  } else {
    layoutProps = layout as React.CSSProperties
  }
  return layoutProps
}

export const SingleLayout = singleOf('div', {
  defaultProps: {
    alignment: <LayoutAlignment>undefined,
    style: <React.CSSProperties>undefined,
  },
  selector: '.s-layout-[uuid]',
  props2CSSProperties: p => ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    height: '100%',
    ...mapLayoutPropsToCSS(p.alignment),
  }),
})

export const Layout = SingleLayout
