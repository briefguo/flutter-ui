import React from 'react'
import { createOf } from '../helpers/createOf'
import { RSCProps, Style } from '../helpers/createRSC'
import { RSProps } from '../interfaces'

export type LayoutAlignment =
  | 'center'
  | 'topCenter'
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
  topCenter: {
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

export const mapLayoutPropsToCSS = (
  layout?: LayoutAlignment,
): React.CSSProperties => {
  let layoutProps: React.CSSProperties
  if (Object.keys(layouts).includes(layout as any)) {
    layoutProps = layouts[layout as LayoutAlignment]
  } else {
    layoutProps = layout as React.CSSProperties
  }
  return {
    ...layoutProps,
  }
}

export class LayoutProps extends RSCProps {
  @Style.Calc(alignment => ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    height: '100%',
    ...mapLayoutPropsToCSS(alignment),
  }))
  alignment?: LayoutAlignment
}

export const Layout = (p: RSProps<LayoutProps>) =>
  React.createElement('div', LayoutProps.of(p))

Layout.of = createOf(Layout)
