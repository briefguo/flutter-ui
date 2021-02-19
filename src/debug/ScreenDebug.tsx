import React from 'react'
import { CSSStyleInjector } from '../helpers/CSSStyleInjector'

export const ScreenDebug = p => {
  if (process.env.SHOW_SCREEN_DEBUG && p['data-screen']) {
    const screenTitle = p['data-screen']
    return (
      <CSSStyleInjector
        classNamePrefix="screen-debug"
        style={{
          position: 'sticky',
          top: 0,
        }}
      >
        {className => <div className={className}>{screenTitle}</div>}
      </CSSStyleInjector>
    )
  } else {
    return null
  }
}
