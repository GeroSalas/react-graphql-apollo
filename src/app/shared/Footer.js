import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { grey } from '@material-ui/core/colors';

const styles = theme => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: grey[800],
    padding: '20px',
    color: grey[50]
  },
  footerText: {
    opacity: 0.35
  },
  footerLink: {
    color: grey[50],
    opacity: 1
  }
});

const Footer = props => {
  const { classes } = props;

  return (
    <div className={classes.footer}>
      <div>
        <small>
          <span className={classes.footerText}>All Rights Reserved</span>
          {' - '}
          <a className={classes.footerLink} href="http://www.frt.utn.edu.ar/" target="_blank" rel="noopener noreferrer">
            AcamyCredits (UTN-FRT)
          </a>
          {' - '}
          <span className={classes.footerText}>Copyright 2019</span>
        </small>
      </div>
    </div>
  )
};

export default withStyles(styles)(Footer);
