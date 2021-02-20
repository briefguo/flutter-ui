import React from 'react'
import { v4 } from 'uuid'

function isNumber(n: any) {
  return typeof n === 'number'
}

export const CSSStyleDeclaration2InlineCSSText = (css: React.CSSProperties) => {
  const excludeUnitProps = ['zIndex']

  // https://stackoverflow.com/questions/45205593/how-to-convert-a-json-style-object-to-a-css-string
  const styleString = Object.entries(css ?? {})
    .filter(([k, v]) => v !== undefined)
    .map(([k, v]) => {
      const setValue = v => (isNumber(v) ? `${v}px` : v)
      const setKey = k =>
        k.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
      if (excludeUnitProps.includes(k)) {
        return `${setKey(k)}:${v}`
      } else {
        return `${setKey(k)}:${setValue(v)}`
      }
    })
    .join(';')

  return {
    cssText: styleString ? styleString + ';' : '',
    // TODO: 合并样式
    // uuid: md5(JSON.stringify(css)).slice(0, 8) as string,
    uuid: v4().slice(0, 8),
  }
}

export interface CSSStyleProviderProps {
  classNamePrefix?: string
  style?: React.CSSProperties
  children?: (className: string) => JSX.Element
}

export const CSSStyleInjector = (props: CSSStyleProviderProps) => {
  // 相同样式的md5值是一样的
  const inlineStyle = CSSStyleDeclaration2InlineCSSText(props.style)
  const currentClassName = `${props.classNamePrefix}-${inlineStyle.uuid}`
  if (inlineStyle.cssText) {
    // TODO: 合并去重
    return (
      <>
        <style data-target={currentClassName} scoped>
          {`.${currentClassName} {${inlineStyle.cssText}}`}
        </style>
        {props.children?.(currentClassName)}
      </>
    )
  } else {
    return <>{props.children?.(undefined)}</>
  }
}
