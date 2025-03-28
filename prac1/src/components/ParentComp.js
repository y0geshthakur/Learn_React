import React, { Component } from 'react'
// import PureComp from './PureComp'
// import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Yogesh'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Yogesh'
            })
        }, 2000)
    }
    
  render() {
    console.log("*************************Parent Comp Render*************************");
    return (
      <div>
        {/* <PureComp name={this.state.name}></PureComp> */}
        {/* <RegComp name={this.state.name}></RegComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
