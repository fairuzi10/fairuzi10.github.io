import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const unmountInitialLoading = () => {
  if (typeof document !== 'undefined') {
    const loadingBody = document.getElementById('loading-body')
    if (loadingBody) {
      loadingBody.remove()
      const loadingStyle = document.getElementById('loading-style')
      if (loadingStyle) loadingStyle.remove()
    }
  }
}

export const wrapRootElement = ({ element }) => {
  unmountInitialLoading()
  return (
    <React.StrictMode>
      <GoogleReCaptchaProvider reCaptchaKey="6LdhrcAaAAAAACwXRuV7VsScbpimAxlTdUam_2Xq">
        {element}
      </GoogleReCaptchaProvider>
    </React.StrictMode>
  )
}
