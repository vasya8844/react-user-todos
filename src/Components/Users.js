import React, { Component } from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

class Users extends Component {
  chooseUser(id){
    this.props.onChoose(id);
  }

  render() {
    let items;
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
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  onChoose: PropTypes.func.isRequired
}

export default Users;
