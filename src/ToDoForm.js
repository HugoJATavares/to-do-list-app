import React, { Component } from "react";

class ToDoForm extends Component{
    constructor(props){
        super(props);
        this.state = { task: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createTask(this.state);
        this.setState({task: ""});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">To Do</label>
                <input type="text" placeholder="To Do" id="task" name="task" value={this.state.task} onChange={this.handleChange}/>
                <button>Add task</button>
            </form>
        )
    }
}

export default ToDoForm;