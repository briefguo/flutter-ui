import React from 'react'
import { StyleInjector } from '../helpers/StyleInjector'

export const ScreenDebug = p => {
  // 使用shadowDOM
  if (process.env.SHOW_SCREEN_DEBUG && p['data-screen']) {
    const screenTitle = p['data-screen']
    return (
      <StyleInjector
        classNamePrefix="screen-debug__container"
        style={{ position: 'relative', right: 0 }}
      >
        {className => (
          <div className={className}>
            <StyleInjector
              classNamePrefix="screen-debug"
              style={{
                position: 'absolute',
                top: 0,
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
            </StyleInjector>
          </div>
        )}
      </StyleInjector>
    )
  } else {
    return null
  }
}
