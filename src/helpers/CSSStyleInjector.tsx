import React from 'react'
import md5 from 'md5'

function isNumber(n: any) {
  return typeof n === 'number'
}

export const CSSStyleDeclaration2InlineCSSText = (css: React.CSSProperties) => {
  const setValue = v => (isNumber(v) ? `${v}px` : v)
  const setKey = k => k.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)

  // https://stackoverflow.com/questions/45205593/how-to-convert-a-json-style-object-to-a-css-string
  const styleString = Object.entries(css)
    .filter(([k, v]) => v !== undefined)
    .map(([k, v]) => `${setKey(k)}:${setValue(v)}`)
    .join(';')

  return {
    cssText: styleString ? styleString + ';' : '',
    // TODO: 合并样式
    // uuid: md5(JSON.stringify(css)).slice(0, 8) as string,
    uuid: md5(Date.now().toString()).slice(0, 8) as string,
  }
}

interface CSSStyleProviderProps {
  classNamePrefix?: string
  style?: React.CSSProperties
  children?: (className: string) => JSX.Element
}

export const CSSStyleInjector = (props: CSSStyleProviderProps) => {
  // 相同样式的md5值是一样的
  const inlineStyle = CSSStyleDeclaration2InlineCSSText(props.style)
  const currentClassName = `${props.classNamePrefix}-${inlineStyle.uuid}`

  // TODO: 合并去重
  return (
    <>
      {inlineStyle.cssText && (
        <style data-target={currentClassName} scoped>
          {`.${currentClassName} {${inlineStyle.cssText}}`}
        </style>
      )}
      {props.children?.(currentClassName)}
    </>
  )
}
