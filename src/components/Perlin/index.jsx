import React from 'react'

import sketch from './sketch'

class Perlin extends React.PureComponent {
  constructor () {
    super()
    this.loadP5 = this.loadP5.bind(this)
  }

  componentDidMount () {
    this.loadP5()
    setTimeout(() => {
      this.perlin.draw = null
    }, 10000)
  }

  loadP5 () {
    try {
      this.perlin = new window.p5(sketch, 'p5_perlin')
    } catch (e) {
      setTimeout(() => {
        this.loadP5()
      }, 50)
    }
  }

  render () {
    return (
      <div id="p5_perlin" />
    )
  }
}

export default Perlin
