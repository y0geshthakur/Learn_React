import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogged : true
      }
    }
    
  render() {
    // if(this.state.isLogged){
    //   return (
    //     <div>Welcome Yogesh</div>
    //   )
    // }
    // else{
    //   return (
    //     <div>Welcome Guest</div>
    //   )
    // }

    return this.state.isLogged ? <div>Welcome Yogesh</div> : <div>Welcome Guest</div>

    // return (
    //   <div>
    //     <div>Welcome Guest</div>
    //     <div>Welcome Yogesh</div>
    //   </div>
    // )
  }
}

export default UserGreeting
