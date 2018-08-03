import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  componentWillMount(){
    console.log('will mount todoItem');
  }

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
