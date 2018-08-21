import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component {
  chooseUser(){
    this.props.onChoose(this.props.user.id);
  }

  render() {
    return (
      <li className="User">
        <a href="javascript:void(0)"
          onClick={this.chooseUser.bind(this)}
          style={
            {fontWeight: this.props.user.selected ? 'bold' : 'normal',
              textDecoration: 'none',
            color: 'inherit'
          }}>
          {this.props.user.name}
        </a>
      </li>
    )
  }
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  onChoose: PropTypes.func.isRequired
}

export default UserItem;
