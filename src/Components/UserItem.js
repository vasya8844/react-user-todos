import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component {
  chooseUser(){
    this.props.onChoose(this.props.user.id);
  }

  render() {
    return (
      <li className="User">
        <strong>{this.props.user.name}</strong>
        &nbsp;
        <button onClick={this.chooseUser.bind(this)}>choose</button>
      </li>
    )
  }
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
