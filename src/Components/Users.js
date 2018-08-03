import React, { Component } from 'react';
import UserItem from './UserItem';
import $ from 'jquery';
import Todos from './Todos';
import PropTypes from 'prop-types';

class Users extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
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

  chooseUser(id){
    this.props.onChoose(id);
    this.getTodos(id);
  }

  componentDidUpdate(){
    console.log('user componentDidUpdate', this.props.users);
    // let selected_user_id = this.props.users.find(user => user.selected).id;
    // this.getTodos(selected_user_id);

  }

  componentWillMount(){
    console.log('componentWillMount', this.props.users);
  }

  render() {
    let items;
    console.log('render users', this.props.users);
    if (this.props.users){
      items = this.props.users.map(user => {
        return (
          <UserItem onChoose={this.chooseUser.bind(this)}
            key={user.id} user={user} />
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
