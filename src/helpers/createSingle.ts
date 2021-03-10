import React from 'react'
import cx from 'classnames'
import { StyleInjector } from '../bases/StyleInjector'
import { SingleProps, XOR } from '../interfaces'
import { createOf } from './createOf'
import { RSProps } from '../interfaces'

interface PickPropsOption {
  entity: any
  keys: string[]
  breakPoint: 'lg' | 'xs'
}

const _pickProps = (option: PickPropsOption) => {
  const obj: any = {}
  Object.keys(option.entity)
    .filter(k => option.keys.includes(k))
    .forEach(k => {
      // 取断点值，不存在时取共用值为断点值
      obj[k] = option.entity[k]?.[option.breakPoint] ?? option.entity[k]
    })
  return obj
}

const _omit = (obj: any = {}, keys: any[] = []) => {
  const targetObj: any = {}
  Object.keys(obj)
    .filter(k => !keys.includes(k))
    .forEach(k => {
      targetObj[k] = obj[k]
    })
  return targetObj
}

const _commonKeys = ['lg', 'xs']

type CSSMapper<T, D> = (p: SingleProps<T & D>) => React.CSSProperties

export interface SingleOfOption<T, D> {
  defaultProps?: D
  selector: string
  props2CSSProperties?: CSSMapper<T, D>
  renderChildren?: (p: SingleProps<T & D>) => React.ReactElement
}

// TODO: 调试
// import ReactDOM from 'react-dom'
// import { ScreenDebug } from '../debug/ScreenDebug'

export function singleOf<T, D>(
  tag: XOR<
    keyof React.ReactHTML,
    React.FunctionComponent<SingleProps<T>> & {
      css?: (p: SingleProps<T & D>) => React.CSSProperties
      selector: string
    }
  >,
  option: SingleOfOption<T, D>,
) {
  const componentPropsKeys =
    typeof tag !== 'string' ? Object.keys(tag?.defaultProps) : []
  const componentCSSMapper = typeof tag !== 'string' ? tag.css : undefined

  const { defaultProps, selector, props2CSSProperties } = option

  const propsKeys = Object.keys(defaultProps ?? {})
    // 当 tag 是 singleOf 创建的组件时，补上它的 keys
    .concat(componentPropsKeys)
    .concat(_commonKeys)

  const TargetC = (p: RSProps<T & D>) => {
    const lgProps = _pickProps({
      entity: p,
      breakPoint: 'lg',
      keys: propsKeys,
    })

    const xsProps = _pickProps({
      entity: p,
      breakPoint: 'xs',
      keys: propsKeys,
    })

    const { className } = StyleInjector.useStyle(selector, {
      lg: {
        ...componentCSSMapper?.(lgProps),
        ...props2CSSProperties?.(lgProps),
        ...lgProps.style
      },
      xs: {
        ...componentCSSMapper?.(xsProps),
        ...props2CSSProperties?.(xsProps),
        ...xsProps.style
      },
    })

    // eslint-disable-next-line react/no-children-prop
    return React.createElement(tag, {
      ..._omit(p, propsKeys),
      className: cx(p.className, className),
      children: p.children,
    })
  }

  TargetC.of = createOf(TargetC)
  TargetC.props2CSSProperties = props2CSSProperties
  TargetC.defaultProps = defaultProps
  TargetC.selector = selector
  return TargetC
}
