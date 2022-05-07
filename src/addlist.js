import React, { Component } from "react";
import "./addlist.css"
class Addlist extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addTodo(this.state);

    }
    render(){
        return(
            <div className = "addtodos">
                <form class = "inputBox" onSubmit={this.handleSubmit}>
                    <h5 class = "blue-text">Add new todo!</h5>
                    <input placeholder="add a new todo here!" type = "text" onChange={this.handleChange}></input>
                </form>
            </div>
        )

    }   
}
export default Addlist;