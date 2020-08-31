import ReactDOM from 'react-dom'
import React from 'react'

export type RenderedComponent<T = any> = React.SFC<
  T & { onClose: any; onComplete: any }
>

export function renderComponent<Result>(C: RenderedComponent, props = {}) {
  return new Promise<Result>(resolve => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const unmount = () => ReactDOM.unmountComponentAtNode(container)
    const onComplete = (V: Result) => {
      resolve(V)
      unmount()
    }
    ReactDOM.render(
      <C onClose={unmount} onComplete={onComplete} {...props} />,
      container,
    )
  })
}
