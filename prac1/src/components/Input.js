import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef();
      this.focusInput = this.focusInput.bind(this);
    }

    focusInput(){
        this.inputRef.current.focus();
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Input
