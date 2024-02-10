import React, { Component } from "react";
import ToDo from "./ToDo";

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            toDos: [{ task:"Study React" }, { task: "Study OutSystems" }] };
    }
    render() {
        const toDos = this.state.toDos.map(toDo =>{
            return <ToDo task={toDo.task} />
        })
        return (
            <div>
                <h1>To-do List</h1>
                <ul>{toDos}</ul>

            </div>
        )
    }
}

export default ToDoList;