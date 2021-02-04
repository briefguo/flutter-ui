export const normalizeRsProps = (p: any) => {
  const obj = { lg: null, xs: null }
  if (p?.lg && p?.xs) {
    obj.lg = p
    obj.xs = p
  }
  return obj
}

export const pickProps = (
  entity: any,
  keys: string[],
  breakPoint: 'lg' | 'xs',
) => {
  const obj: any = {}
  Object.keys(entity)
    .filter(k => keys.includes(k))
    .forEach(k => {
      obj[k] = entity[k]?.[breakPoint] ?? entity[k]
    })
  return obj
}

export const mergeRsProps = (props1: any = {}, props2: any = {}) => {
  const targetObject: any = {}
  const mergedKeys = Object.keys(props1).concat(Object.keys(props2))

  const uniqArr = new Set(mergedKeys)
  uniqArr.forEach(key => {
    targetObject[key] = {
      lg: props2?.lg ?? props1?.lg ?? props2 ?? props1,
      xs: props2?.xs ?? props1?.xs ?? props2 ?? props1,
    }
  })
  return targetObject
}
