import React from 'react'


/**
 * Used when some big bytes (e.g. picture) are not going to displayed
 * so the bytes sent are optimized
 * Used like this: */
/*
<DesktopOnly shown={() => (
  <DesktopDisplay></DesktopDisplay>
)} else={() => (
  <MobileDisplay></MobileDisplay>
)}>
</DesktopOnly>
*/
export default class DesktopOnly extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }
  }

  updateDimensions() {
    const w = window
    const d = document
    const de = d.documentElement
    const body = d.getElementsByTagName('body')[0]
    const width = w.innerWidth || de.clientWidth || body.clientWidth
    /// const height = w.innerHeight|| de.clientHeight|| body.clientHeight

    this.setState({
      show: width >= 768
    });
  }
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  render() {
    return (
      this.state.show ? this.props.shown() : this.props.else()
    )
  }
}
