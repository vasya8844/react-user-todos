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
          style={ {fontWeight: this.props.user.selected ? 'bold' : 'normal'}}>
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
  onChoose: PropTypes.func.isRequired
}

export default UserItem;
