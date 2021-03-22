import React from 'react'
import ReactDOM from 'react-dom/server'
import md5 from 'md5'
import { ProperRSProperty } from '../interfaces'
import { CSSStyleDeclaration2InlineCSSText } from './CSSStyleDeclaration2InlineCSSText'

const uuidCache: string[] = []
const xsCssCache: string[] = []
const lgCssCache: string[] = []
const clientCache: string[] = []

const mobileBreakpoint = 'max-width: 767px'
const pcBreakpoint = 'min-width: 768px'

const isMobile = `@media screen and (${mobileBreakpoint})`
// const isDesktop = '@media screen and (min-width: 992px)'
// const isNotMobile = '@media screen and (min-width: 768px)'
const isDefault = `@media screen and (${pcBreakpoint})`

export class RSStyleSheet {
  static _isMobile = () => window.matchMedia(mobileBreakpoint).matches
  static _isDefault = () => window.matchMedia(pcBreakpoint).matches

  static get breakpoint() {
    if (typeof window === 'undefined') {
      return ''
    }
    if (RSStyleSheet._isDefault()) {
      return 'lg'
    }
    if (RSStyleSheet._isMobile()) {
      return 'xs'
    }
  }
  static createStyle(
    selector: string,
    css: ProperRSProperty<React.CSSProperties>,
  ) {
    const { lg, xs } = css
    const uuid = md5(JSON.stringify({ selector, css })).slice(0, 8)
    const targetSelector = selector?.replace('[uuid]', uuid)

    const lgCss = `${targetSelector} { ${CSSStyleDeclaration2InlineCSSText(
      lg,
    )} }`
    const xsCss = `${targetSelector} { ${CSSStyleDeclaration2InlineCSSText(
      xs,
    )} }`

    const targetClassName = targetSelector?.replace(/^./, '')

    if (uuidCache.includes(uuid)) {
      // document.getElementById(id).remove()
      // document.head.appendChild(styleTag)
    } else {
      uuidCache.push(uuid)
      lgCssCache.push(lgCss)
      xsCssCache.push(xsCss)
    }

    if (typeof window !== 'undefined') {
      const serverStyle = document.querySelectorAll(
        'style[data-power-by="flutter-ui"]',
      )[0]
      // 服务端没渲染出来的样式(客户端需要请求接口后渲染的)，客户端主动添加
      if (!serverStyle.textContent?.includes(targetClassName)) {
        if (clientCache.includes(targetClassName)) {
          //
        } else {
          const styleTag = document.createElement('style')
          styleTag.setAttribute('data-power-by', 'flutter-ui-client')
          styleTag.setAttribute('data-id', targetClassName)
          styleTag.textContent = `
            ${isMobile} { ${xsCss} }
            ${isDefault} { ${lgCss} }
          `
          document.head.appendChild(styleTag)
          clientCache.push(targetClassName)
        }
      }
    }

    return { className: targetClassName }
  }

  collectStyles(a: JSX.Element) {
    ReactDOM.renderToStaticMarkup(a)
    // console.log(ReactDOM.renderToStaticMarkup(a))
    // console.log(cssCache)
    return a
  }

  getStyleText() {
    const lgCssText = lgCssCache.join('\n')
    const xsCssText = xsCssCache.join('\n')
    const cssText = `
      ${isMobile} { ${xsCssText} }
      ${isDefault} { ${lgCssText} }
    `
    return cssText
  }

  getStyleElement() {
    // console.log(ReactDOM.renderToStaticMarkup(a))
    // console.log(cssCache)
    const cssText = this.getStyleText()
    return <style data-power-by="flutter-ui">{cssText}</style>
  }
}
