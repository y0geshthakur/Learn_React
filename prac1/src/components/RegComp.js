import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log("Regular Comp Render");
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp
