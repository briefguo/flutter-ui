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
    height: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  leftBottom: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '100%',
  },
  rightTop: {
    alignItems: 'flex-end',
  },
  rightBottom: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '100%',
  },
  leftCenter: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightCenter: {
    height: '100%',
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
  },
  selector: '.s-layout-[uuid]',
  css: p => ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    ...mapLayoutPropsToCSS(p.alignment),
  }),
})

export const Layout = SingleLayout
