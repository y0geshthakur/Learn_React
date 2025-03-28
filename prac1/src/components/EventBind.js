// Binding event handler to this keyword

import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }
      
    //   Approach 3 (Best) : Binding the event handler to this keyword inside the constructor
    // Good because this will only bind the this keyword only once, rather that the other 2 approaches which will bind again and again on every render
      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            message : "Goodbye"
        })
    }

    // Approach 4 (Equally good) : Creating the funtion as an arrow function
    // clickHandler = () => {
    //     this.setState({
    //         message : "Goodbye"
    //     })
    // }
    
  render() {
    return (
        <>
        <div>{this.state.message}</div>
      <div>
        {/* Approach 1 (Low perf) : Inline binding,  Binding inside the callback function call */}
        {/* <button onClick = { this.clickHandler.bind(this) }>Click</button> */}

        {/* Approach 2 (Low perf) : Passing the event handler inside an arrow function because this in an arrow function refers to the nearest lexical scope */}
        {/* <button onClick = { () => this.clickHandler() }>Click</button> */}

        <button onClick = { this.clickHandler }>Click</button>
      </div>
        </>
    )
  }
}

export default EventBind
