import React from 'react'

export function createOf<T>(C: React.FC<T>) {
  return (base: T) => {
    const TargetC = (p: T) => <C {...base} {...p} />
    TargetC.displayName = C.displayName ?? C.name
    TargetC.of = createOf(TargetC)
    return TargetC
  }
}
