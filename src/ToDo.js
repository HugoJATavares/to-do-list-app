import React, { Component } from "react";

class ToDo extends Component {
        constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        }
    handleRemove(){
        this.props.removeTask(this.props.id);
    }
    render(){
        return(
            <div>
                <button>Edit</button>
                <button onClick={this.handleRemove}>Delete</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default ToDo;