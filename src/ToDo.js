import React, { Component } from "react";

class ToDo extends Component {
    render(){
        return(
            <div>
                <button>Edit</button>
                <button>Delete</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default ToDo;