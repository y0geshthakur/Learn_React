import React, { Component } from 'react';

// Creating a class component

// class Welcome extends Component {
//     render(){
//         return <h1>Hello { this.props.name }</h1>
//     }
// }

// Desctructuring props and state in class component

class Welcome extends Component {
    render(){
        const { name } = this.props
        // const { state1, state2 } = this.state
        return <h1>Hello { name }</h1>
    }
}

export default Welcome;