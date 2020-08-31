import { useMediaQuery } from 'react-responsive'
import React, { Fragment } from 'react'

export function useDevice() {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return {
    isDesktop,
    isTablet,
    isMobile,
    isNotMobile,
  }
}

export const Desktop: React.SFC = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return <Fragment>{isDesktop ? children : null}</Fragment>
}
export const Tablet: React.SFC = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return <Fragment>{isTablet ? children : null}</Fragment>
}
export const Mobile: React.SFC = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return <Fragment>{isMobile ? children : null}</Fragment>
}
export const Default: React.SFC = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return <Fragment>{isNotMobile ? children : null}</Fragment>
}
