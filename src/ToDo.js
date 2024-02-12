import React, { Component } from "react";
import "./ToDo.css";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove() {
        this.props.removeTask(this.props.id);
    }
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }
    handleToggle(evt) {
        this.props.toggleTask(this.props.id)
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTask(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value

        });
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="ToDo">
                    <form className="ToDo-edit-form" onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
                        <button>Update</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className="ToDo">
                    <li className={this.props.completedTask ? "To-Do-Task completed" : "To-Do-Task"} onClick={this.handleToggle} >{this.props.task} </li>
                    <div className="ToDo-buttons">
                        <button onClick={this.toggleForm}><i class="fas fa-pen" /></button>
                        <button onClick={this.handleRemove}><i class="fas fa-trash"/></button>
                    </div>
                </div>
            );
        }
        return result;
    }
}

export default ToDo;