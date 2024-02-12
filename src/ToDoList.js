import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            toDos: [] };
            this.create = this.create.bind(this);
            this.update = this.update.bind(this);
            this.remove = this.remove.bind(this);
    }
    create(newTask) {
        this.setState({
            toDos: [...this.state.toDos, newTask]
        });
    }
    update(id, updated){
        const updatedTask = this.state.toDos.map(toDo =>{
            if(toDo.id === id) {
                return { ...toDo, task: updated };
            }
            return toDo;
        });
        this.setState({ toDos: updatedTask})
    }
    remove(id) {
        this.setState({
            toDos: this.state.toDos.filter(task => task.id !==id)
        });
    }
    render() {
        const toDos = this.state.toDos.map(toDo =>{
            return <ToDo key={toDo.id} id={toDo.id} task={toDo.task} removeTask={this.remove} updateTask={this.update}/>
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