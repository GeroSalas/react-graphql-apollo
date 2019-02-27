import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Avatar, Button, CssBaseline, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Typography, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

import get from 'lodash/get';
import Storage from '../utils/Storage';

import loginStyles from './Login.styles';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: !!props.auth
    };
  }

  handleLogin = event => {
    // TODO: validate real credentials
    const currentUser = { id: '1' };
    Storage.setObjectItem('AUTH_AC', currentUser);
    this.setState({ redirectToReferrer: true });
  }

  render() {
    const { from } = get(this.props, 'location.state') || { from: { pathname: '/admin/users' } };
    const { classes } = this.props;

    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} onSubmit={this.handleLogin}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email...</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password...</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(loginStyles)(Login);
