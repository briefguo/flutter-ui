import React from 'react'

export function createOf<T>(C: React.FC<T>) {
  return (base: T) => {
    const TargetC = (p: T) => <C {...base} {...p} />
    TargetC.of = createOf(TargetC)
    return TargetC
  }
}
