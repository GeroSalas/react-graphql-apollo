import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const Users = (props) => {
  const { classes, data } = props;
  
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Users
        </Typography>
        <Typography component="pre">
          { JSON.stringify(data) }
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Users);
