import React, { Component } from 'react'

class MirrorText extends Component {
  state = {
    value: "",
  }
  
  updateValue = (event) => {
    this.setState(() => ({
      value: event,
    }))
  }

  render() {
    console.log("MirrorText iniciando... this.props ", this.props, " this.state ", this.state)
    const { value } = this.state;
    return (
      <div className="container">
        <input 
          type="text" 
          placeholder="Say Something" 
          value={value}
          onChange={(event) => this.updateValue(event.target.value)}/>
        <p className="echo">Echo:</p>
        <p>{value}</p>
      </div>
    )
  }
}
export default MirrorText
