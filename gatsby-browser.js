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

exports.wrapRootElement = ({ element }) => {
  unmountInitialLoading()
  return element
}
