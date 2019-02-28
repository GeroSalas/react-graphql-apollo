import React from 'react';
import { Query } from 'react-apollo';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

import Loading from '../utils/Loading';
import ErrorMessage from '../utils/Error';
import Logger from '../utils/Logger';

import { GET_SETTINGS_BY_ID } from '../constants/endpoints';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const Settings = (props) => {
  const { classes, auth } = props;
  
  return (
    <Query
        query={GET_SETTINGS_BY_ID}
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

          Logger.debug('CACHE STATE', client.cache.data.data.ROOT_QUERY);
          return (
            <div>
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  Settings
                </Typography>
                <Typography component="pre">
                  { JSON.stringify(payload) }
                </Typography>
              </Paper>
            </div>
          );
        }}
      </Query>
  );
}

export default withStyles(styles)(Settings);
