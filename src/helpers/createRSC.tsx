import React from 'react'
import cx from 'classnames'
import { useDevices } from '../deprecated'

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

export const createRSC = C => {
  return props => {
    const lgProps = _pickProps({
      entity: props,
      breakPoint: 'lg',
      keys: Object.keys(props),
    })
    const xsProps = _pickProps({
      entity: props,
      breakPoint: 'xs',
      keys: Object.keys(props),
    })
    // TODO: 待优化实现
    const { isDefault, isMobile } = useDevices()
    return (
      <>
        {isDefault && (
          <C {...lgProps} className={cx(lgProps.className, 'lg')}>
            {props.children}
          </C>
        )}
        {isMobile && (
          <C {...xsProps} className={cx(xsProps.className, 'xs')}>
            {props.children}
          </C>
        )}
      </>
    )
  }
}
