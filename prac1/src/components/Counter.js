// rce -> react class component
import React, { Component } from 'react'

class Counter extends Component {
    // rconst -> react constructor
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }
    incrementCount(){
        // this.setState({
        //     count : this.state.count + 1
        // }, () => {
        //     console.log("Counter Value : " + this.state.count);
        // })
        // console.log(this.state.count);
        this.setState(prevState => ({
            count : prevState.count + 1
        }), () => console.log("Counter Value : " + this.state.count));
    }
    incrementFive(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    
  render() {
    return (
      <div>
        <h1>Count - { this.state.count }</h1>
        <button onClick = { () => this.incrementFive() }>Increase count</button>
      </div>
    )
  }
}

export default Counter
