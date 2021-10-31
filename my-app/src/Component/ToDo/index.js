import React, { Component } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [ 
        { id: 1, name: "sleep" },
        { id: 2, name: "Walk" },]};
  }

  handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.task.value) {
          const todo = {
              id: this.state.todos.length +1 , name: e.target.task.value,};
         this.setState({ todos: [...this.state.todos, todo]});
         e.target.task.value =""; //// تفضي اللسته
            }
      };
      handleDelete = (id) => {
          this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id )});
      };

  render() {
    return (
      <div className="todo">
        <form onSubmit = {this.handleSubmit}>
          <input className= "input" type="text" name="task" />
          <button className= "addBtn">Add Task </button>
        </form>
        <ul className ="todos"> 
          {this.state.todos.map((todo, i) => (
            <TodoItem todo={todo} key={i}handleDelete = {this.handleDelete} />
          ))}
        </ul>
      </div>
    ); 
  }
}

export default Todo;
