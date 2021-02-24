import React from 'react'
import { ResponsiveSpace } from '../bases/Space'
import { RSProperty } from '../interfaces'

export interface ListBuilderProps<T> {
  items?: T[]
  gutter?: RSProperty<number>
  builder: (item: T) => JSX.Element
  style?: React.CSSProperties
}

export function ListBuilder<T>(props: ListBuilderProps<T>) {
  return (
    <ResponsiveSpace size={props.gutter} style={props.style}>
      {props.items?.map(item => props.builder(item))}
    </ResponsiveSpace>
  )
}
