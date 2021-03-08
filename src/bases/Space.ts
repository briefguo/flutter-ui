import React, { Fragment } from 'react'
import { Property } from 'csstype'
import { singleOf } from '../helpers/createSingle'

const SpaceItem = singleOf('div', {
  defaultProps: {
    direction: <'vertical' | 'horizen'>undefined,
    box: <'inline-flex' | 'flex'>undefined,
    align: <Property.AlignItems>undefined,
    size: <number>undefined,
  },
  selector: '.s-space__item-[uuid]',
  props2CSSProperties: p => {
    switch (p.direction) {
      case 'vertical':
        return {
          marginTop: p.size / 2,
          marginBottom: p.size / 2,
        }
      case 'horizen':
      default:
        return {
          flex: p.box === 'flex' ? '1 1' : undefined,
          marginLeft: p.size / 2,
          marginRight: p.size / 2,
        }
    }
  },
})

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
// https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap

export const SingleSpace = singleOf('div', {
  defaultProps: {
    direction: <'vertical' | 'horizen'>'horizen',
    box: <'inline-flex' | 'flex'>'inline-flex',
    align: <Property.AlignItems>undefined,
    size: <number>undefined,
    children: <React.ReactNode[]>undefined,
    style: <React.CSSProperties>undefined,
  },
  selector: '.s-space-[uuid]',
  props2CSSProperties: p => {
    switch (p.direction) {
      case 'vertical':
        return {
          display: p.box,
          flexDirection: 'column',
          alignItems: p.align,
          marginTop: -p.size / 2,
          marginBottom: -p.size / 2,
        }
      case 'horizen':
      default:
        return {
          display: p.box,
          alignItems: p.align,
          marginLeft: -p.size / 2,
          marginRight: -p.size / 2,
        }
    }
  },
  renderChildren: p => {
    // eslint-disable-next-line react/no-children-prop
    return React.createElement(Fragment, {
      children: p.children.map((child, index) =>
        // eslint-disable-next-line react/no-children-prop
        React.createElement(SpaceItem, { ...p, key: index, children: child }),
      ),
    })
  },
})

export const Space = SingleSpace
