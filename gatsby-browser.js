import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

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
  return <React.StrictMode>{element}</React.StrictMode>
}
