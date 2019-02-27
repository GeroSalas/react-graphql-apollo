import React, { Component } from 'react';
import {
  MenuList,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import {
  Apps as AppsIcon,
  Settings as SettingsIcon
} from '@material-ui/icons';
import NavItem from './NavItem';

export default class Navbar extends Component {

  render() {
    return (
      <MenuList>
        <NavItem to="/admin/users">
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </NavItem>
        <NavItem to="/admin/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </NavItem>
      </MenuList>
    );
  }
}
