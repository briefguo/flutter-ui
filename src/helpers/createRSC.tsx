import React, { PropsWithChildren } from 'react'
import { useDevices } from '../deprecated'
import { RSProps } from '../interfaces'
import { createOf } from './createOf'

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

export function createRSC<T>(C: React.FC<T>) {
  const TargetC = (props: PropsWithChildren<RSProps<T>>) => {
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
        {isDefault && <C {...lgProps} lg />}
        {isMobile && <C {...xsProps} xs />}
      </>
    )
  }
  TargetC.of = createOf(TargetC)
  return TargetC
}
