import React from 'react'
import { RS } from './RS'
import { RSProperty } from '../interfaces'
import { createOf } from '../helpers/createOf'

export interface ListBuilderProps<T> {
  items?: T[]
  gutter?: RSProperty<number>
  builder?: (item: T) => JSX.Element
  style?: React.CSSProperties
}

export function ListBuilder<T>(props: ListBuilderProps<T>) {
  return (
    <RS.Space size={props.gutter} style={props.style}>
      {props.items?.map(item => props.builder?.(item))}
    </RS.Space>
  )
}

ListBuilder.of = createOf(ListBuilder)
