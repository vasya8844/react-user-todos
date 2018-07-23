import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component {
  chooseUser(){
    this.props.onChoose(this.props.user.id);
  }

  render() {
    return (
      <li className="User">
        <span
          style={ this.props.active_user_id == this.props.user.id ? {'font-weight': 'bold'} : {'font-weight': 'normal'}}>
          {this.props.user.name}
        </span>
        &nbsp;
        <button onClick={this.chooseUser.bind(this)}>choose</button>
      </li>
    )
  }
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  active_user_id: PropTypes.number.isRequired
}

export default UserItem;
