import React, { Fragment } from 'react'

export const renderChildren = (children: any) => {
  if (Array.isArray(children)) {
    return children.map((c, index) => <Fragment key={index}>{c}</Fragment>)
  } else {
    return children
  }
}
