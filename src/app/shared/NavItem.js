import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

export default class NavItem extends Component {

  render() {
    const { to, children } = this.props;
    const selected = window.location.hash.slice(1) === to;

    return (
      <MenuItem selected={selected} component={Link} to={to}>{children}</MenuItem>
    )
  }
}
