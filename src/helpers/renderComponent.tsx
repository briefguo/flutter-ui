import ReactDOM from 'react-dom'
import React from 'react'

/**
 * @deprecated
 */
export type RenderedComponent<T = any> = React.FC<
  T & { onClose: any; onComplete: any }
>

export type RCProps<P, R> = P & {
  onClose: () => void
  onComplete: (r: R) => void
}
export type RC<P, R> = React.FC<RCProps<P, R>>

export function renderComponent<P, R>(C: RC<P, R>, props: P) {
  return new Promise<R>(resolve => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const unmount = () => ReactDOM.unmountComponentAtNode(container)
    const onComplete = (V: R) => {
      resolve(V)
      unmount()
    }
    ReactDOM.render(
      <C onClose={unmount} onComplete={onComplete} {...props} />,
      container,
    )
  })
}
