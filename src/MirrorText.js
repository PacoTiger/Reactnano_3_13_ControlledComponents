import React, { Component } from 'react'

class MirrorText extends Component {

  render() {
    console.log("MirrorText iniciando... this.props ", this.props, " this.state ", this.state)
    return (
      <div className="container">
        <input type="text" placeholder="Say Something" />
        <p className="echo">Echo:</p>
        <p>This should mirror the text you typed into the input field.</p>
      </div>
    )
  }
}
export default MirrorText
