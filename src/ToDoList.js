import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            toDos: [{ task:"Study React" }, { task: "Study OutSystems" }] };
            this.create = this.create.bind(this);
    }
    create(newTask) {
        this.setState({
            toDos: [...this.state.toDos, newTask]
        });
    }

    render() {
        const toDos = this.state.toDos.map(toDo =>{
            return <ToDo task={toDo.task} />
        })
        return (
            <div>
                <h1>To-do List</h1>
                <ToDoForm createTask ={this.create}/>
                <ul>{toDos}</ul>

            </div>
        )
    }
}

export default ToDoList;