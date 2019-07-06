import React from 'react'

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
