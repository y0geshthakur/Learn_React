import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Yogesh'
      }
      console.log('Lifecycle A constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('Lifecycle A componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'YogeshOP'
        })
    }
    
  render() {
    console.log('Lifecycle A render');
    return (
      <div>
        LifecycleA
        <button onClick={this.changeState}>Click</button>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA
