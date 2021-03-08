import React, { Fragment } from 'react'
import md5 from 'md5'

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
    uuid: md5(JSON.stringify(css ?? {})).slice(0, 8),
  }
}

export interface StyleInjectorProps {
  classNamePrefix?: string
  style?: React.CSSProperties
  children?: (className: string) => JSX.Element
}

const cache = []

const appendStyle = (id: string, css: string) => {
  const styleTag = document.createElement('style')
  styleTag.textContent = css
  styleTag.id = id

  if (cache.includes(id)) {
    // document.getElementById(id).remove()
    // document.head.appendChild(styleTag)
  } else {
    document.head.appendChild(styleTag)
    cache.push(id)
  }
}

function useStyle(selector: string, css: React.CSSProperties) {
  const inlineStyle = CSSStyleDeclaration2InlineCSSText(css)
  const targetSelector = selector.replace('[uuid]', inlineStyle.uuid)
  const targetClassName = targetSelector.replace(/^./, '')

  appendStyle(
    inlineStyle.uuid,
    targetSelector.concat(`{ ${inlineStyle.cssText} }`),
  )

  return { className: targetClassName }
}

export const StyleInjector = (props: StyleInjectorProps) => {
  const { className } = useStyle(
    `.${props.classNamePrefix}-[uuid]`,
    props.style,
  )
  return <>{props.children?.(className)}</>
}

StyleInjector.useStyle = useStyle
