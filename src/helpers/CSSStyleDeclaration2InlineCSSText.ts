function isNumber(n: any) {
  return typeof n === 'number'
}

export const CSSStyleDeclaration2InlineCSSText = (css?: React.CSSProperties) => {
  const excludeUnitProps = ['zIndex']

  // https://stackoverflow.com/questions/45205593/how-to-convert-a-json-style-object-to-a-css-string
  const styleString = Object.entries(css ?? {})
    .filter(([k, v]) => v !== undefined)
    .map(([k, v]) => {
      const setValue = (v: any) => (isNumber(v) ? `${v}px` : v)
      const setKey = (k: string) =>
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
