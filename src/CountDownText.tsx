import React, { useRef, useState } from 'react'
import { Text } from './Text'

interface CountDownTextProps {
  text: string
  renderCountDown: (time: string) => string
  onSend?: () => Promise<boolean>
}

export const CountDownText = (props: CountDownTextProps) => {
  const defaultCaptchaState = {
    enable: true,
    second: 60,
  }
  const captchaRef = useRef({
    ...defaultCaptchaState,
    timer: undefined as any,
  })

  const [captcha, setCaptcha] = useState(defaultCaptchaState)

  const reset = () => {
    setCaptcha(defaultCaptchaState)
    clearInterval(captchaRef.current.timer)
    captchaRef.current.enable = true
    captchaRef.current.second = 60
  }

  const onClick = async () => {
    if (!captcha.enable) {
      return
    }
    const isOk = await props.onSend?.()
    if (isOk && captcha.enable) {
      setCaptcha({
        enable: false,
        second: captchaRef.current.second,
      })
      // 开始计时
      captchaRef.current.timer = setInterval(() => {
        if (captchaRef.current.second > 0) {
          captchaRef.current.second = captchaRef.current.second - 1
          setCaptcha({
            enable: false,
            second: captchaRef.current.second,
          })
        } else {
          reset()
        }
      }, 1000)
    }
  }

  const text = captcha.enable
    ? props.text
    : props.renderCountDown(captcha.second.toString())

  return (
    <Text
      onClick={onClick}
      whiteSpace="nowrap"
      colorType={captcha.enable ? 'primary' : 'descriptionColor'}
    >
      {text}
    </Text>
  )
}
