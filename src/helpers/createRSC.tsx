import cx from 'classnames'
import { RSStyleSheet } from './RSStyleSheet'
import { Native } from '../decorators/Native'
import { Style } from '../decorators/Style'

export * from '../decorators/Style'
export * from '../decorators/Native'

// TODO: 调试
// import ReactDOM from 'react-dom'
// import { ScreenDebug } from '../debug/ScreenDebug'

export class RSCProps {
  static getCurrentProperty = (p: any) => {
    if (RSCProps.isRSProperty(p)) {
      if (RSStyleSheet.breakpoint) {
        return p[RSStyleSheet.breakpoint]
      }
    } else {
      return p
    }
  }

  static isRSProperty = (rs: any) => rs?.lg || rs?.xs

  private static _omit = (obj: any = {}, keys: any[] = []) => {
    Object.keys(obj)
      .filter(k => keys.includes(k))
      .forEach(k => {
        delete obj[k]
      })
    return obj
  }

  private static resolveDecoratedStyleProps(p: any, k: string) {
    Style.As.resolve(p, k)
    Style.Calc.resolve(p, k)
    Style.Map.resolve(p, k)
  }

  private static pickByBreakpoint(p: any, breakpoint: 'lg' | 'xs') {
    const rsPropsKeys = Object.keys(p)
    const singleProps: any = new this()
    rsPropsKeys
      .filter(k => !this.commonProps.includes(k))
      .forEach(k => {
        if (this.isRSProperty(p[k])) {
          singleProps[k] = p[k]?.[breakpoint]
        } else {
          singleProps[k] = p[k]
        }
      })

    return singleProps
  }

  static get identitor() {
    return this.name.replace('Props', '').toLowerCase()
  }

  static get selector() {
    return `.rs-${this.identitor}-[uuid]`
  }

  static get commonProps() {
    return ['lg', 'xs']
  }

  static get commonReactProps() {
    return ['style', 'className', 'children', 'data-screen']
  }

  static props2Style(p: any) {
    Object.keys(p).forEach(k => this.resolveDecoratedStyleProps(p, k))
    return p
  }

  static collectNativeProps(p: any) {
    // 获取实例上的所有成员
    let nativeProps = {}
    const rsPropsKeys = Object.keys(p)

    rsPropsKeys.forEach(k => {
      if (this.commonReactProps.includes(k)) {
        nativeProps = Object.assign(nativeProps, { [k]: p[k] })
      }
      if (Native.As.decorated(p, k)) {
        nativeProps = Object.assign(nativeProps, Native.As.resolve(p, k))
      }
      if (Native.Data.decorated(p, k)) {
        nativeProps = Object.assign(nativeProps, Native.Data.resolve(p, k))
      }
    })

    return nativeProps
  }

  static of(p: any) {
    // Props类实例化
    const instance = new this()

    // 合并实例上默认参数和传入参数
    const mergedProps = Object.assign(instance, p)

    // 收集原生props
    const nativeProps = this.collectNativeProps(mergedProps)

    // 排除原生props，用于处理style
    const styleProps = this._omit(mergedProps, Object.keys(nativeProps))

    const lgProps = this.pickByBreakpoint(styleProps, 'lg')
    const xsProps = this.pickByBreakpoint(styleProps, 'xs')

    const { className } = RSStyleSheet.createStyle(this.selector, {
      lg: { ...this.props2Style(lgProps), ...lgProps.style },
      xs: { ...this.props2Style(xsProps), ...xsProps.style },
    })

    return {
      ...nativeProps,
      className: cx(className, p.className, {
        lg: p.lg,
        xs: p.xs,
      }),
      children: p.children,
    }
  }
}
