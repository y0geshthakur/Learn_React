import React , { Component } from 'react'

class Message extends Component {
    constructor(){
        super();
        this.state = {
            message : "Hello Visitor"
        }
    }
    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    render(){
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick = { () => this.changeMessage()}>Subscribe</button>
            </>
        );
    }
}

export default Message;


// import React , { Component } from 'react'

// class Message extends Component {
//     constructor(){
//         super();
//         this.state = {
//             message : "Hello Visitor",
//             buttonText : "Subscribe"
//         }
//     }
//     isSub = false;
//     changeMessage(){
//         if(this.isSub){
//             this.setState({
//                 message: "Unsubscribed",
//                 buttonText : "Subscribe"
//             })
//             this.isSub = false;
//         }
//         else{
//             this.setState({
//                 message: "Thank you for subscribing",
//                 buttonText : "Unsubscribe"
//             })
//             this.isSub = true;
//         }
//     }
//     render(){
//         return (
//             <>
//                 <h1>{this.state.message}</h1>
//                 <button onClick = { () => this.changeMessage()}>{this.state.buttonText}</button>
//             </>
//         );
//     }
// }

// export default Message;