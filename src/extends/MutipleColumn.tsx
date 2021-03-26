import React from 'react'
import { createOf } from '../helpers/createOf'
import { ProperRSProperty } from '../interfaces'
import { RS } from './RS'

export interface MutipleColumnProps {
  count?: ProperRSProperty<number>
  gap?: [ProperRSProperty<number>, ProperRSProperty<number>]
  children?: React.ReactNode[]
}

export const MutipleColumn = (props: MutipleColumnProps) => {
  const [colGap, rowGap] = props.gap ?? []
  return (
    <RS.Container columnCount={props.count} columnGap={colGap}>
      {props.children?.map((item, index) => (
        <div
          key={index}
          style={{
            // https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout
            breakInside: 'avoid',
            pageBreakInside: 'avoid',
          }}
        >
          {item}
          <RS.Container height={rowGap} />
        </div>
      ))}
    </RS.Container>
  )
}

MutipleColumn.of = createOf(MutipleColumn)
