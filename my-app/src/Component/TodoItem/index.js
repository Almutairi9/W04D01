import React from 'react';
import "./style.css";

class TodoItem extends React.Component{
   constructor(props) {
       super(props);
   }
    render() 
   {
        return (
            <div>
            <li>
                <h3> {this.props.todo.name}</h3>
                <h3 className ='todoClose' onClick={()=> this.props.handleDelete(this.props.todo.id)}>  X </h3>
                </li> 
            </div>); 
    }
}

export default TodoItem; 
