import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const isMobile = '@media screen and (max-width: 767px)'
export const isDesktop = '@media screen and (min-width: 992px)'

/**
 * @deprecated
 */
export const isNotMobile = '@media screen and (min-width: 768px)'

export const isDefault = '@media screen and (min-width: 768px)'

// media query
// TODO: 此处暂不支持SSR，待进一步优化，不推荐广泛使用
export const useDevices = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isDefault = useMediaQuery({ minWidth: 768 })
  return {
    isMobile,
    isDefault,
  }
}

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? <>{children}</> : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? <>{children}</> : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? <>{children}</> : null
}
