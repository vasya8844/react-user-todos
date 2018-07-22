import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component {
  chooseUser(id){
    this.props.onChoose(id);
  }

  render() {
    return (
      <li className="User">
        <strong>{this.props.user.name}</strong>
        <a href='#' onClick={this.chooseUser.bind(this, this.props.user.id)}>choose</a>
      </li>
    )
  }
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
