import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    removeTodo(id) {
        this.props.onDelete(id);
    }

    render() {
        
        return (
            <li className="TodoItem">
                <strong>{this.props.todo.title}</strong>
                <span onClick={this.removeTodo.bind(this, this.props.todo.id)}>Remove</span>
            </li>
        );
    }
}

TodoItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}

export default TodoItem;
