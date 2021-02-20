import React from 'react'
import { shallow } from 'enzyme'
import {
  CSSStyleInjector,
  CSSStyleProviderProps,
  CSSStyleDeclaration2InlineCSSText,
} from '../src/helpers/CSSStyleInjector'

describe('CSSStyleInjector', () => {
  it('style set correctly', () => {
    const wrapper = shallow<CSSStyleProviderProps>(
      <CSSStyleInjector>
        {className => <div className={className}>Hello</div>}
      </CSSStyleInjector>,
    )
    wrapper.setProps({ style: { padding: 10 } })
    expect(wrapper.html().includes('padding:10px')).toBe(true)
  })

  it('CSSStyleDeclaration2InlineCSSText ok', () => {
    const a = CSSStyleDeclaration2InlineCSSText({ zIndex: 10 })
    expect(a.cssText).toBe('z-index:10;')
  })
})
