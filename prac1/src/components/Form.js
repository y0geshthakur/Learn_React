import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : "",
         comment : "",
         select : "Java"
      }
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange(event){
        this.setState({
            username : event.target.value
        })
    }
    handleCommentChange(event){
        this.setState({
            comment : event.target.value
        })
    }
    handleSelectChange(event){
        this.setState({
            select : event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(`${this.state.username}`);
        console.log(`${this.state.comment}`);
        console.log(`${this.state.select}`);
    }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username : </label>
            <input type = "text" value = {this.state.username} onChange={this.handleUsernameChange}></input>
        </div>
        <div>
            <label>Comment : </label>
            <textarea value = {this.state.comment} onChange = {this.handleCommentChange}></textarea>
        </div>
        <div>
            <label>Skill : </label>
            <select value = {this.state.select} onChange = { this.handleSelectChange }>
                <option value = "java">Java</option>
                <option value = "javascript">JavaScript</option>
                <option value = "node">Node</option>
            </select>
        </div>
        <button type = "submit">Submit</button>
      </form>
    )
  }
}

export default Form
