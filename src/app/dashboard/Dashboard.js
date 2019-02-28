import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Drawer, AppBar, Toolbar, Typography, Divider, IconButton, Button }  from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Navbar from '../shared/Navbar';
import Loading from '../utils/Loading';
import ErrorMessage from '../utils/Error';
import Logger from '../utils/Logger';

import Users from '../users/Users';
import Settings from '../settings/Settings';

import { GET_USER_BY_ID } from '../constants/endpoints';
import dashboardStyles from './Dashboard.styles';

class Dashboard extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, auth } = this.props;

    return (
      <Query
        query={GET_USER_BY_ID}
        variables={{ id: auth.id }}
        skip={!auth}
        notifyOnNetworkStatusChange={true}
      >
        {({ client, loading, error, data: { payload } }) => {
          if (error) {
            return <ErrorMessage error={error} />;
          }

          if (loading && !payload) {
            return <Loading />;
          }

          if (!error && !payload) {
            return <ErrorMessage error='INITIALIZATION ERROR' />;
          }

          // https://www.apollographql.com/docs/react/advanced/caching.html
          Logger.debug('CACHE STATE', client.cache.data.data.ROOT_QUERY);
          return (
            <div className={classes.root}>
              <CssBaseline />
              <AppBar
                position="absolute"
                className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
              >
                <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(
                      classes.menuButton,
                      this.state.open && classes.menuButtonHidden,
                    )}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Admin Console for {payload.name}
                  </Typography>
                  <Button color="inherit" onClick={this.props.logout}>Logout</Button>
                </Toolbar>
              </AppBar>
              <Drawer
                variant="permanent"
                classes={{
                  paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                }}
                open={this.state.open}
              >
                <div className={classes.toolbarIcon}>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <Divider />
                <Navbar/>
              </Drawer>
              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Switch>
                  <Route path='/admin/users' render={_ => <Users data={payload} auth={auth} />}/>
                  <Route path='/admin/settings' render={_ => <Settings auth={auth} />}/>
                  <Redirect to='/admin/users' />
                </Switch>
              </main>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(dashboardStyles)(Dashboard);
