import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        <h3>Todo list</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
