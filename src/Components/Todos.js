import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
    
    deleteTodo(id) {
        this.props.onDelete(id);
    }

    render() {

        let todoItems;
        if(this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} onDelete={this.deleteTodo.bind(this)}/>
                )
            });
        }
        
        return (
            <div className="Todos">
                <h3>Todo List</h3>
                {todoItems}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array,
    onDelete: PropTypes.func
}


export default Todos;
