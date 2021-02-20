import React from 'react'
import { CSSStyleInjector } from '../helpers/CSSStyleInjector'

export const ScreenDebug = p => {
  if (process.env.SHOW_SCREEN_DEBUG && p['data-screen']) {
    const screenTitle = p['data-screen']
    return (
      <CSSStyleInjector
        classNamePrefix="screen-debug__container"
        style={{ position: 'relative' }}
      >
        {className => (
          <div className={className}>
            <CSSStyleInjector
              classNamePrefix="screen-debug"
              style={{
                position: 'absolute',
                right: 0,
                color: '#fff',
                padding: 15,
                textAlign: 'center',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                backdropFilter: 'saturate(180%) blur(20px)',
                borderRadius: '24px 0 0 24px',
                background: 'rgba(0,0,0,0.5)',
              }}
            >
              {className => (
                <div className={className}>screen-{screenTitle}</div>
              )}
            </CSSStyleInjector>
          </div>
        )}
      </CSSStyleInjector>
    )
  } else {
    return null
  }
}
