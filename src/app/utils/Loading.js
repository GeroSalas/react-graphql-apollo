import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  progress: {
    flexGrow: 1,
  },
});

const Loading = props => {
  const { classes } = props;
  return (
    <div className={classes.progress}>
      <LinearProgress color="primary" />
    </div>
    );
}

export default withStyles(styles)(Loading);
