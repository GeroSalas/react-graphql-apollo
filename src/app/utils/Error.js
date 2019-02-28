import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Logger from './Logger';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: red[500] // #F44336
  },
});

const ErrorMessage = (props) => {
  const { classes, error } = props;
  Logger.error('ERROR', error);
  
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Oops! An error ocurred.
        </Typography>
        <Typography component="p">
          { error.toString() }
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(ErrorMessage);
