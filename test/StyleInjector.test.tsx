// import React from 'react'
// import { shallow } from 'enzyme'
import { CSSStyleDeclaration2InlineCSSText } from '../src/bases/StyleInjector'

describe('CSSStyleInjector', () => {
  // it('style set correctly', () => {
  //   const wrapper = shallow<StyleInjectorProps>(
  //     <StyleInjector>
  //       {className => <div className={className}>Hello</div>}
  //     </StyleInjector>,
  //   )
  //   wrapper.setProps({ style: { padding: 10 } })
  //   expect(wrapper.html().includes('padding:10px')).toBe(true)
  // })

  it('CSSStyleDeclaration2InlineCSSText ok', () => {
    const a = CSSStyleDeclaration2InlineCSSText({ zIndex: 10 })
    expect(a.cssText).toBe('z-index:10;')
  })
})
