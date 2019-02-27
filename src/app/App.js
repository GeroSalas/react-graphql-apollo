import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import Storage from './utils/Storage';

import Login from './auth/Login'
import Dashboard from './dashboard/Dashboard'
import Footer from './shared/Footer';

const styles = theme => ({
  app: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
});

class App extends Component {

  getCurrentAuthSession = () => {
    const currentUser = Storage.getObjectItem('AUTH_AC');
    return currentUser;
  }
  
  cleanCurrentAuthSession = () => {
    Storage.removeItem('AUTH_AC');
    this.props.client.resetStore();
    window.location.reload();
  }

  render() {
    const { classes } = this.props;
    const currentUser = this.getCurrentAuthSession();

    return (
      <div className={classes.app}>
        <Switch>
          <PrivateRoute path='/admin' component={Dashboard} auth={currentUser} logout={this.cleanCurrentAuthSession} />
          <Route path='/' render={_ => <Login auth={currentUser} />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
