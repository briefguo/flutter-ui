import React from 'react'
import ReactDOM from 'react-dom/server'
import md5 from 'md5'
import { ProperRSProperty } from '../interfaces'

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

  return styleString ? styleString + ';' : ''
}

export interface StyleInjectorProps {
  classNamePrefix?: string
  style?: React.CSSProperties
  children?: (className: string) => JSX.Element
}

const cache = []
const cssCache = []

function useStyle(
  selector: string,
  css: ProperRSProperty<React.CSSProperties>,
) {
  const { lg, xs } = css
  const isMobile = '@media screen and (max-width: 767px)'
  // const isDesktop = '@media screen and (min-width: 992px)'
  // const isNotMobile = '@media screen and (min-width: 768px)'
  const isDefault = '@media screen and (min-width: 768px)'
  const uuid = md5(JSON.stringify(css)).slice(0, 8)
  const targetSelector = selector.replace('[uuid]', uuid)

  const cssText = `
    ${isMobile} {
      ${targetSelector} { ${CSSStyleDeclaration2InlineCSSText(xs)} }
    }

    ${isDefault} {
      ${targetSelector} { ${CSSStyleDeclaration2InlineCSSText(lg)} }
    }
  `
  const targetClassName = targetSelector.replace(/^./, '')

  if (cache.includes(uuid)) {
    // document.getElementById(id).remove()
    // document.head.appendChild(styleTag)
  } else {
    cache.push(uuid)
    cssCache.push(cssText)
  }

  // React.useEffect(() => {
  //   const styleTag = document.createElement('style')
  //   styleTag.id = uuid
  //   styleTag.textContent = cssText
  //   if (cache.includes(uuid)) {
  //     // document.getElementById(id).remove()
  //     // document.head.appendChild(styleTag)
  //   } else {
  //     cache.push(uuid)
  //     document.head.appendChild(styleTag)
  //   }
  // }, [])

  return { className: targetClassName }
}

export function collectStyles(a) {
  ReactDOM.renderToStaticMarkup(a)
  // console.log(ReactDOM.renderToStaticMarkup(a))
  // console.log(cssCache)
  return a
}

export function getStyleElement() {
  // console.log(ReactDOM.renderToStaticMarkup(a))
  // console.log(cssCache)
  return <style data-power-by="flutter-ui">{cssCache.join()}</style>
}

export const StyleInjector = () => {
  return <></>
}

StyleInjector.useStyle = useStyle
