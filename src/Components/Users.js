import React, { Component } from 'react';
import UserItem from './UserItem';
import $ from 'jquery';
import Todos from './Todos';
import PropTypes from 'prop-types';

class Users extends Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      active_user_id: 1
    }
  }

  getTodos(user_id){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users/' + user_id + '/todos',
      dataType: 'json',
      cached: false,
      success: function(data){
        this.setState({todos: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  componentWillMount(){
    this.getTodos(1);
  }

  handleChooseUser(user_id){
    this.setState({active_user_id: user_id});
    this.getTodos(user_id);
  }

  chooseUser(id){
    this.props.onChoose(id);
  }

  render() {
    let items;
    if (this.props.users){
      items = this.props.users.map(user => {
        return (
          <UserItem onChoose={this.handleChooseUser.bind(this)}
            key={user.id} user={user}
            active_user_id={this.state.active_user_id} />
        );
      });
    }
    return (
      <div className="Users">
        <h3>User list</h3>
        {items}
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  onChoose: PropTypes.func.isRequired
}

export default Users;
